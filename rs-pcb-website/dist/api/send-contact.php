<?php
/**
 * RS PCB Assembly — Contact Form Email Handler (SMTP version)
 */

require_once __DIR__ . '/smtp-mailer.php';

$TO_EMAIL = 'apatel@rspcbassembly.com';

$allowed = ['https://rspcbassembly.com','https://www.rspcbassembly.com','http://localhost:5173','http://localhost:4173'];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowed)) header("Access-Control-Allow-Origin: $origin");
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['success'=>false,'error'=>'Method not allowed']); exit; }

// Rate limiting
session_start();
$rk = 'cr_' . md5($_SERVER['REMOTE_ADDR']);
if (!isset($_SESSION[$rk])) $_SESSION[$rk] = ['c'=>0,'r'=>time()+600];
if (time() > $_SESSION[$rk]['r']) $_SESSION[$rk] = ['c'=>0,'r'=>time()+600];
$_SESSION[$rk]['c']++;
if ($_SESSION[$rk]['c'] > 5) { http_response_code(429); echo json_encode(['success'=>false,'error'=>'Too many requests. Try again later.']); exit; }

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) { http_response_code(400); echo json_encode(['success'=>false,'error'=>'Invalid request']); exit; }

foreach (['name','email','subject','message'] as $f) {
    if (empty($data[$f])) { http_response_code(400); echo json_encode(['success'=>false,'error'=>"Missing: $f"]); exit; }
}
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) { http_response_code(400); echo json_encode(['success'=>false,'error'=>'Invalid email']); exit; }

function clean($s) { return htmlspecialchars(strip_tags(trim($s)), ENT_QUOTES, 'UTF-8'); }

$name    = clean($data['name']);
$email   = clean($data['email']);
$company = clean($data['company'] ?? '');
$phone   = clean($data['phone'] ?? '');
$subject = clean($data['subject']);
$message = clean($data['message']);

$subjectLabels = [
    'quote'     => 'Request a Quote',
    'order'     => 'Order Status',
    'technical' => 'Technical Question',
    'general'   => 'General Inquiry',
];
$subjectLabel = $subjectLabels[$subject] ?? $subject;
$emailSubject = "Website Contact: $subjectLabel — $name";

$body = "<html><body style='font-family:Arial,sans-serif;color:#333'>";
$body .= "<h2 style='color:#0a1628;border-bottom:2px solid #2563eb;padding-bottom:10px'>New Contact Message</h2>";
$body .= "<table style='width:100%;border-collapse:collapse;margin:20px 0'>";
$body .= "<tr><td style='padding:8px;font-weight:bold;width:140px'>Name:</td><td style='padding:8px'>$name</td></tr>";
$body .= "<tr style='background:#f8f9fa'><td style='padding:8px;font-weight:bold'>Email:</td><td style='padding:8px'><a href='mailto:$email'>$email</a></td></tr>";
$body .= "<tr><td style='padding:8px;font-weight:bold'>Company:</td><td style='padding:8px'>".($company ?: 'N/A')."</td></tr>";
$body .= "<tr style='background:#f8f9fa'><td style='padding:8px;font-weight:bold'>Phone:</td><td style='padding:8px'>".($phone ?: 'N/A')."</td></tr>";
$body .= "<tr><td style='padding:8px;font-weight:bold'>Subject:</td><td style='padding:8px'>$subjectLabel</td></tr>";
$body .= "<tr style='background:#f8f9fa'><td style='padding:8px;font-weight:bold'>Message:</td><td style='padding:8px'>".nl2br($message)."</td></tr>";
$body .= "</table>";
$body .= "<hr style='border:1px solid #eee;margin:20px 0'>";
$body .= "<p style='color:#999;font-size:12px'>Sent from rspcbassembly.com contact form</p>";
$body .= "</body></html>";

$mailer = getMailer();

// Send notification to RS team
$sent = $mailer->send($email, $name, $TO_EMAIL, $emailSubject, $body);

if ($sent) {
    // Send confirmation to visitor
    $cb  = "<html><body style='font-family:Arial,sans-serif;color:#333'>";
    $cb .= "<h2 style='color:#0a1628'>Thank You for Contacting Us</h2>";
    $cb .= "<p>Hi $name,</p>";
    $cb .= "<p>We received your message regarding <strong>$subjectLabel</strong> and will get back to you within one business day.</p>";
    $cb .= "<p>Questions? Reply to this email or call <strong>+1 (438) 833-8477</strong>.</p>";
    $cb .= "<br><p>Best regards,<br><strong>R.S. Electronique Inc.</strong><br>Montreal, QC, Canada</p>";
    $cb .= "</body></html>";

    $mailer2 = getMailer();
    $mailer2->send($TO_EMAIL, 'R.S. Electronique Inc.', $email, "Message Received - R.S. Electronique Inc.", $cb);

    echo json_encode(['success'=>true,'message'=>'Message sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success'=>false,'error'=>'Failed to send. Please email us directly at apatel@rspcbassembly.com','debug'=>$mailer->getLog()]);
}
?>
