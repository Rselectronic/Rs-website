<?php
/**
 * Lightweight SMTP Mailer for Bluehost
 * No external dependencies — uses raw socket SMTP with AUTH LOGIN.
 *
 * IMPORTANT: Update credentials below with your Bluehost email account.
 */

class SmtpMailer {
    private $host;
    private $port;
    private $user;
    private $pass;
    private $socket;
    private $log = [];

    public function __construct($host, $port, $user, $pass) {
        $this->host = $host;
        $this->port = $port;
        $this->user = $user;
        $this->pass = $pass;
    }

    private function send_cmd($cmd, $expect = 250) {
        fwrite($this->socket, $cmd . "\r\n");
        $resp = $this->get_response();
        $code = intval(substr($resp, 0, 3));
        $this->log[] = ">>> $cmd\n<<< $resp";
        if ($code !== $expect && !is_array($expect)) {
            throw new Exception("SMTP Error: expected $expect, got $code — $resp");
        }
        if (is_array($expect) && !in_array($code, $expect)) {
            throw new Exception("SMTP Error: expected one of " . implode(',', $expect) . ", got $code — $resp");
        }
        return $resp;
    }

    private function get_response() {
        $data = '';
        while ($line = fgets($this->socket, 515)) {
            $data .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return trim($data);
    }

    /**
     * Send an email via SMTP
     *
     * @param string $from     Sender email
     * @param string $fromName Sender display name
     * @param string $to       Recipient email
     * @param string $subject  Email subject
     * @param string $body     Full MIME body (headers + content)
     * @param string $headers  Additional headers string
     * @return bool
     */
    public function send($from, $fromName, $to, $subject, $htmlBody, $rawHeaders = '', $rawBody = '') {
        try {
            $this->socket = fsockopen('ssl://' . $this->host, $this->port, $errno, $errstr, 30);
            if (!$this->socket) {
                throw new Exception("Connection failed: $errstr ($errno)");
            }
            stream_set_timeout($this->socket, 30);

            $this->get_response(); // greeting
            $this->send_cmd("EHLO " . gethostname(), [250]);
            $this->send_cmd("AUTH LOGIN", 334);
            $this->send_cmd(base64_encode($this->user), 334);
            $this->send_cmd(base64_encode($this->pass), 235);
            $this->send_cmd("MAIL FROM:<{$this->user}>", 250);
            $this->send_cmd("RCPT TO:<$to>", [250, 251]);
            $this->send_cmd("DATA", 354);

            // Build message
            $msg  = "From: $fromName <{$this->user}>\r\n";
            $msg .= "Reply-To: $fromName <$from>\r\n";
            $msg .= "To: $to\r\n";
            $msg .= "Subject: $subject\r\n";
            $msg .= "Date: " . date('r') . "\r\n";

            if ($rawHeaders) {
                $msg .= $rawHeaders;
            } else {
                $msg .= "MIME-Version: 1.0\r\n";
                $msg .= "Content-Type: text/html; charset=UTF-8\r\n";
            }

            $msg .= "\r\n";
            $msg .= $rawBody ?: $htmlBody;
            $msg .= "\r\n.";

            $this->send_cmd($msg, 250);
            $this->send_cmd("QUIT", 221);
            fclose($this->socket);
            return true;
        } catch (Exception $e) {
            $this->log[] = "ERROR: " . $e->getMessage();
            if ($this->socket) {
                try { fwrite($this->socket, "QUIT\r\n"); } catch(Exception $ex) {}
                fclose($this->socket);
            }
            return false;
        }
    }

    /**
     * Send an email with file attachments via SMTP
     */
    public function sendWithAttachments($from, $fromName, $to, $subject, $htmlBody, $attachments = []) {
        $boundary = md5(uniqid(time()));
        $nl = "\r\n";

        $rawHeaders  = "MIME-Version: 1.0" . $nl;
        $rawHeaders .= "Content-Type: multipart/mixed; boundary=\"$boundary\"" . $nl;

        $rawBody  = "--$boundary" . $nl;
        $rawBody .= "Content-Type: text/html; charset=UTF-8" . $nl;
        $rawBody .= "Content-Transfer-Encoding: 7bit" . $nl . $nl;
        $rawBody .= $htmlBody . $nl;

        foreach ($attachments as $att) {
            $rawBody .= "--$boundary" . $nl;
            $rawBody .= "Content-Type: " . $att['type'] . "; name=\"" . $att['name'] . "\"" . $nl;
            $rawBody .= "Content-Transfer-Encoding: base64" . $nl;
            $rawBody .= "Content-Disposition: attachment; filename=\"" . $att['name'] . "\"" . $nl . $nl;
            $rawBody .= chunk_split(base64_encode($att['content']));
        }
        $rawBody .= "--$boundary--";

        return $this->send($from, $fromName, $to, $subject, '', $rawHeaders, $rawBody);
    }

    public function getLog() { return implode("\n", $this->log); }
}

/**
 * Get configured SMTP mailer instance.
 *
 * CONFIGURE THESE: Use your actual Bluehost email credentials.
 * Go to Bluehost → Email & Office → Manage → create or use existing email account.
 */
function getMailer() {
    return new SmtpMailer(
        'smtp.gmail.com',           // Google Workspace SMTP
        465,                         // SSL port
        'apatel@rspcbassembly.com', // Your Google Workspace email
        'tvutlbfgyziivrwe'    // Google App Password (16 chars, no spaces) — CHANGE THIS!
    );
}
?>
