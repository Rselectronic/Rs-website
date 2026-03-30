<?php
/**
 * RS PCB Assembly — Quote Request Email Handler
 * -----------------------------------------------
 * Receives form data + encrypted file buffers from the React frontend,
 * decrypts the files, and sends everything as an email with attachments
 * using PHP's built-in mail (Bluehost SMTP).
 *
 * Security:
 *  - Files are AES-256-CBC encrypted in the browser before transfer
 *  - CORS restricted to your domain
 *  - File size and type validation
 *  - Rate limiting via session
 */

// ===================== CONFIG =====================
$TO_EMAIL     = 'apatel@rspcbassembly.com';
$FROM_EMAIL   = 'noreply@rspcbassembly.com';
$FROM_NAME    = 'RS PCB Assembly Website';
$ENCRYPT_KEY  = 'RS-PCB-2026-SecureFileTransfer!'; // Must match frontend key
$MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB per file
$MAX_TOTAL_SIZE = 50 * 1024 * 1024; // 50 MB total
// ==================================================

// CORS headers
$allowed_origins = [
    'https://rspcbassembly.com',
    'https://www.rspcbassembly.com',
    'http://localhost:5173',
    'http://localhost:4173',
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only POST allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Simple rate limiting (max 5 submissions per 10 minutes per IP)
session_start();
$ip = $_SERVER['REMOTE_ADDR'];
$rate_key = 'quote_rate_' . md5($ip);
if (!isset($_SESSION[$rate_key])) {
    $_SESSION[$rate_key] = ['count' => 0, 'reset' => time() + 600];
}
if (time() > $_SESSION[$rate_key]['reset']) {
    $_SESSION[$rate_key] = ['count' => 0, 'reset' => time() + 600];
}
$_SESSION[$rate_key]['count']++;
if ($_SESSION[$rate_key]['count'] > 5) {
    http_response_code(429);
    echo json_encode(['success' => false, 'error' => 'Too many requests. Please try again later.']);
    exit;
}

// Parse JSON body
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request data']);
    exit;
}

// Validate required fields
$required = ['name', 'email', 'company', 'assemblyType', 'quantity'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => "Missing required field: $field"]);
        exit;
    }
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
    exit;
}

// Sanitize inputs
function clean($str) {
    return htmlspecialchars(strip_tags(trim($str)), ENT_QUOTES, 'UTF-8');
}

$name         = clean($data['name']);
$email        = clean($data['email']);
$company      = clean($data['company']);
$phone        = clean($data['phone'] ?? '');
$projectName  = clean($data['projectName'] ?? '');
$boardName    = clean($data['boardName'] ?? '');
$assemblyType = clean($data['assemblyType']);
$quantity     = clean($data['quantity']);
$targetDate   = clean($data['targetDate'] ?? '');
$details      = clean($data['details'] ?? '');

// ===================== DECRYPT FILES =====================
function decryptFile($encryptedBase64, $key) {
    $encrypted = base64_decode($encryptedBase64);
    if ($encrypted === false) return false;

    // Extract IV (first 16 bytes) and ciphertext
    $iv_length = 16; // AES block size
    if (strlen($encrypted) < $iv_length) return false;

    $iv = substr($encrypted, 0, $iv_length);
    $ciphertext = substr($encrypted, $iv_length);

    // Derive a 256-bit key from the passphrase
    $derived_key = hash('sha256', $key, true);

    // Decrypt
    $decrypted = openssl_decrypt($ciphertext, 'aes-256-cbc', $derived_key, OPENSSL_RAW_DATA, $iv);
    return $decrypted;
}

$attachments = [];
$totalSize = 0;

if (!empty($data['files']) && is_array($data['files'])) {
    foreach ($data['files'] as $fileData) {
        if (empty($fileData['name']) || empty($fileData['data'])) continue;

        $fileName = preg_replace('/[^a-zA-Z0-9._\-\s]/', '', $fileData['name']);
        $decrypted = decryptFile($fileData['data'], $ENCRYPT_KEY);

        if ($decrypted === false) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => "Failed to decrypt file: $fileName"]);
            exit;
        }

        $fileSize = strlen($decrypted);
        $totalSize += $fileSize;

        if ($fileSize > $MAX_FILE_SIZE) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => "File too large: $fileName (max 25 MB)"]);
            exit;
        }

        if ($totalSize > $MAX_TOTAL_SIZE) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Total file size exceeds 50 MB limit']);
            exit;
        }

        $attachments[] = [
            'name' => $fileName,
            'content' => $decrypted,
            'type' => $fileData['type'] ?? 'application/octet-stream',
        ];
    }
}

// ===================== BUILD EMAIL =====================
$boundary = md5(uniqid(time()));
$nl = "\r\n";

// Headers
$headers  = "From: $FROM_NAME <$FROM_EMAIL>" . $nl;
$headers .= "Reply-To: $name <$email>" . $nl;
$headers .= "MIME-Version: 1.0" . $nl;
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"" . $nl;

// Subject
$subject = "New RFQ from $name — $company";

// Body text
$body = "--$boundary" . $nl;
$body .= "Content-Type: text/html; charset=UTF-8" . $nl;
$body .= "Content-Transfer-Encoding: 7bit" . $nl . $nl;

$body .= "<html><body style='font-family: Arial, sans-serif; color: #333;'>";
$body .= "<h2 style='color: #0a1628; border-bottom: 2px solid #2563eb; padding-bottom: 10px;'>New Quote Request</h2>";
$body .= "<table style='width: 100%; border-collapse: collapse; margin: 20px 0;'>";
$body .= "<tr><td style='padding: 8px; font-weight: bold; width: 160px; vertical-align: top;'>Name:</td><td style='padding: 8px;'>$name</td></tr>";
$body .= "<tr style='background: #f8f9fa;'><td style='padding: 8px; font-weight: bold; vertical-align: top;'>Email:</td><td style='padding: 8px;'><a href='mailto:$email'>$email</a></td></tr>";
$body .= "<tr><td style='padding: 8px; font-weight: bold; vertical-align: top;'>Company:</td><td style='padding: 8px;'>$company</td></tr>";
$body .= "<tr style='background: #f8f9fa;'><td style='padding: 8px; font-weight: bold; vertical-align: top;'>Phone:</td><td style='padding: 8px;'>" . ($phone ?: 'Not provided') . "</td></tr>";
$body .= "<tr><td colspan='2' style='padding: 15px 8px 5px; font-weight: bold; color: #2563eb; font-size: 16px;'>Project Details</td></tr>";
$body .= "<tr style='background: #f8f9fa;'><td style='padding: 8px; font-weight: bold; vertical-align: top;'>Project Name:</td><td style='padding: 8px;'>" . ($projectName ?: 'Not specified') . "</td></tr>";
$body .= "<tr><td style='padding: 8px; font-weight: bold; vertical-align: top;'>Board / GMP #:</td><td style='padding: 8px;'>" . ($boardName ?: 'Not specified') . "</td></tr>";
$body .= "<tr style='background: #f8f9fa;'><td style='padding: 8px; font-weight: bold; vertical-align: top;'>Assembly Type:</td><td style='padding: 8px;'>$assemblyType</td></tr>";
$body .= "<tr><td style='padding: 8px; font-weight: bold; vertical-align: top;'>Quantity:</td><td style='padding: 8px;'>$quantity</td></tr>";
$body .= "<tr style='background: #f8f9fa;'><td style='padding: 8px; font-weight: bold; vertical-align: top;'>Target Date:</td><td style='padding: 8px;'>" . ($targetDate ?: 'Not specified') . "</td></tr>";
$body .= "<tr><td style='padding: 8px; font-weight: bold; vertical-align: top;'>Details:</td><td style='padding: 8px;'>" . ($details ? nl2br($details) : 'None') . "</td></tr>";
$body .= "</table>";

if (count($attachments) > 0) {
    $body .= "<p style='color: #2563eb; font-weight: bold;'>📎 " . count($attachments) . " file(s) attached</p>";
}

$body .= "<hr style='border: 1px solid #eee; margin: 20px 0;'>";
$body .= "<p style='color: #999; font-size: 12px;'>Sent from rspcbassembly.com quote form</p>";
$body .= "</body></html>";
$body .= $nl;

// Attachments
foreach ($attachments as $att) {
    $body .= "--$boundary" . $nl;
    $body .= "Content-Type: " . $att['type'] . "; name=\"" . $att['name'] . "\"" . $nl;
    $body .= "Content-Transfer-Encoding: base64" . $nl;
    $body .= "Content-Disposition: attachment; filename=\"" . $att['name'] . "\"" . $nl . $nl;
    $body .= chunk_split(base64_encode($att['content']));
}

$body .= "--$boundary--";

// ===================== SEND =====================
$sent = mail($TO_EMAIL, $subject, $body, $headers);

if ($sent) {
    // Also send confirmation to customer
    $conf_headers  = "From: $FROM_NAME <$FROM_EMAIL>" . $nl;
    $conf_headers .= "MIME-Version: 1.0" . $nl;
    $conf_headers .= "Content-Type: text/html; charset=UTF-8" . $nl;

    $conf_body  = "<html><body style='font-family: Arial, sans-serif; color: #333;'>";
    $conf_body .= "<h2 style='color: #0a1628;'>Thank You for Your Quote Request</h2>";
    $conf_body .= "<p>Hi $name,</p>";
    $conf_body .= "<p>We've received your quote request for <strong>$assemblyType</strong> assembly";
    $conf_body .= ($projectName ? " for <strong>$projectName</strong>" : "") . ".</p>";
    $conf_body .= "<p>Our team will review your files and send a detailed quote within <strong>24 hours</strong>.</p>";
    $conf_body .= "<p>If you have any questions, reply to this email or call us at <strong>+1 (438) 833-8477</strong>.</p>";
    $conf_body .= "<br><p>Best regards,<br><strong>R.S. Electronique Inc.</strong><br>Montreal, QC, Canada</p>";
    $conf_body .= "</body></html>";

    mail($email, "Quote Request Received — R.S. Electronique Inc.", $conf_body, $conf_headers);

    echo json_encode(['success' => true, 'message' => 'Quote request sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send email. Please try again or email us directly.']);
}
?>
