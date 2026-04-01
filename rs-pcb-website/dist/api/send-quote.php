<?php
/**
 * RS PCB Assembly — Quote Request Email Handler (SMTP version)
 * Receives form data + encrypted files from React, decrypts, emails with attachments.
 */

require_once __DIR__ . '/smtp-mailer.php';

$TO_EMAIL     = 'apatel@rspcbassembly.com';
$ENCRYPT_KEY  = 'RS-PCB-2026-SecureFileTransfer!';
$MAX_FILE_SIZE = 25 * 1024 * 1024;
$MAX_TOTAL_SIZE = 50 * 1024 * 1024;

$allowed = ['https://rspcbassembly.com','https://www.rspcbassembly.com','http://localhost:5173','http://localhost:4173'];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowed)) header("Access-Control-Allow-Origin: $origin");
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['success'=>false,'error'=>'Method not allowed']); exit; }

session_start();
$rk = 'qr_' . md5($_SERVER['REMOTE_ADDR']);
if (!isset($_SESSION[$rk])) $_SESSION[$rk] = ['c'=>0,'r'=>time()+600];
if (time() > $_SESSION[$rk]['r']) $_SESSION[$rk] = ['c'=>0,'r'=>time()+600];
$_SESSION[$rk]['c']++;
if ($_SESSION[$rk]['c'] > 5) { http_response_code(429); echo json_encode(['success'=>false,'error'=>'Too many requests. Try again later.']); exit; }

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) { http_response_code(400); echo json_encode(['success'=>false,'error'=>'Invalid request']); exit; }

foreach (['name','email','company','assemblyType','quantity'] as $f) {
    if (empty($data[$f])) { http_response_code(400); echo json_encode(['success'=>false,'error'=>"Missing: $f"]); exit; }
}
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) { http_response_code(400); echo json_encode(['success'=>false,'error'=>'Invalid email']); exit; }

function clean($s) { return htmlspecialchars(strip_tags(trim($s)), ENT_QUOTES, 'UTF-8'); }

$name = clean($data['name']);
$email = clean($data['email']);
$company = clean($data['company']);
$phone = clean($data['phone'] ?? '');
$projectName = clean($data['projectName'] ?? '');
$boardName = clean($data['boardName'] ?? '');
$assemblyType = clean($data['assemblyType']);
$quantity = clean($data['quantity']);
$targetDate = clean($data['targetDate'] ?? '');
$details = clean($data['details'] ?? '');

function decryptFile($b64, $key) {
    $enc = base64_decode($b64);
    if (!$enc || strlen($enc) < 16) return false;
    $iv = substr($enc, 0, 16);
    $ct = substr($enc, 16);
    return openssl_decrypt($ct, 'aes-256-cbc', hash('sha256', $key, true), OPENSSL_RAW_DATA, $iv);
}

$attachments = [];
$totalSize = 0;
if (!empty($data['files']) && is_array($data['files'])) {
    foreach ($data['files'] as $fd) {
        if (empty($fd['name']) || empty($fd['data'])) continue;
        $fn = preg_replace('/[^a-zA-Z0-9._\-\s]/', '', $fd['name']);
        $dec = decryptFile($fd['data'], $ENCRYPT_KEY);
        if ($dec === false) { http_response_code(400); echo json_encode(['success'=>false,'error'=>"Decrypt failed: $fn"]); exit; }
        $fs = strlen($dec);
        $totalSize += $fs;
        if ($fs > $MAX_FILE_SIZE) { http_response_code(400); echo json_encode(['success'=>false,'error'=>"File too large: $fn"]); exit; }
        if ($totalSize > $MAX_TOTAL_SIZE) { http_response_code(400); echo json_encode(['success'=>false,'error'=>'Total size exceeds 50MB']); exit; }
        $attachments[] = ['name'=>$fn,'content'=>$dec,'type'=>$fd['type'] ?? 'application/octet-stream'];
    }
}

$subject = "New RFQ from $name - $company";

$htmlBody = "<html><body style='font-family:Arial,sans-serif;color:#333'>";
$htmlBody .= "<h2 style='color:#0a1628;border-bottom:2px solid #2563eb;padding-bottom:10px'>New Quote Request</h2>";
$htmlBody .= "<table style='width:100%;border-collapse:collapse;margin:20px 0'>";
$htmlBody .= "<tr><td style='padding:8px;font-weight:bold;width:160px'>Name:</td><td style='padding:8px'>$name</td></tr>";
$htmlBody .= "<tr style='background:#f8f9fa'><td style='padding:8px;font-weight:bold'>Email:</td><td style='padding:8px'><a href='mailto:$email'>$email</a></td></tr>";
$htmlBody .= "<tr><td style='padding:8px;font-weight:bold'>Company:</td><td style='padding:8px'>$company</td></tr>";
$htmlBody .= "<tr style='background:#f8f9fa'><td style='padding:8px;font-weight:bold'>Phone:</td><td style='padding:8px'>".($phone?:'N/A')."</td></tr>";
$htmlBody .= "<tr><td colspan='2' style='padding:15px 8px 5px;font-weight:bold;color:#2563eb;font-size:16px'>Project Details</td></tr>";
$htmlBody .= "<tr style='background:#f8f9fa'><td style='padding:8px;font-weight:bold'>Project:</td><td style='padding:8px'>".($projectName?:'N/A')."</td></tr>";
$htmlBody .= "<tr><td style='padding:8px;font-weight:bold'>Board/GMP#:</td><td style='padding:8px'>".($boardName?:'N/A')."</td></tr>";
$htmlBody .= "<tr style='background:#f8f9fa'><td style='padding:8px;font-weight:bold'>Assembly Type:</td><td style='padding:8px'>$assemblyType</td></tr>";
$htmlBody .= "<tr><td style='padding:8px;font-weight:bold'>Quantity:</td><td style='padding:8px'>$quantity</td></tr>";
$htmlBody .= "<tr style='background:#f8f9fa'><td style='padding:8px;font-weight:bold'>Target Date:</td><td style='padding:8px'>".($targetDate?:'N/A')."</td></tr>";
$htmlBody .= "<tr><td style='padding:8px;font-weight:bold'>Details:</td><td style='padding:8px'>".($details?nl2br($details):'None')."</td></tr>";
$htmlBody .= "</table>";
if (count($attachments) > 0) $htmlBody .= "<p style='color:#2563eb;font-weight:bold'>".count($attachments)." file(s) attached</p>";
$htmlBody .= "<hr style='border:1px solid #eee;margin:20px 0'><p style='color:#999;font-size:12px'>Sent from rspcbassembly.com quote form</p></body></html>";

$mailer = getMailer();

// Send with attachments if files present, otherwise plain
if (count($attachments) > 0) {
    $sent = $mailer->sendWithAttachments($email, $name, $TO_EMAIL, $subject, $htmlBody, $attachments);
} else {
    $sent = $mailer->send($email, $name, $TO_EMAIL, $subject, $htmlBody);
}

if ($sent) {
    // Send confirmation to visitor
    $cb = "<html><body style='font-family:Arial,sans-serif;color:#333'><h2 style='color:#0a1628'>Thank You for Your Quote Request</h2>";
    $cb .= "<p>Hi $name,</p><p>We received your request for <strong>$assemblyType</strong> assembly".($projectName?" for <strong>$projectName</strong>":"").".</p>";
    $cb .= "<p>Our team will send a detailed quote within <strong>24 hours</strong>.</p>";
    $cb .= "<p>Questions? Reply to this email or call <strong>+1 (438) 833-8477</strong>.</p>";
    $cb .= "<br><p>Best regards,<br><strong>R.S. Electronique Inc.</strong><br>Montreal, QC, Canada</p></body></html>";

    $mailer2 = getMailer();
    $mailer2->send($TO_EMAIL, 'R.S. Electronique Inc.', $email, "Quote Request Received - R.S. Electronique Inc.", $cb);

    echo json_encode(['success'=>true,'message'=>'Quote request sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success'=>false,'error'=>'Failed to send. Please email us directly at apatel@rspcbassembly.com','debug'=>$mailer->getLog()]);
}
?>
