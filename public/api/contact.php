<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// SMTP Configuration (IONOS-compatible)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer (assuming it's installed via Composer in a vendor directory)
// If not using Composer, you'll need to download and include PHPMailer manually
// require 'path/to/PHPMailer/src/PHPMailer.php';
// require 'path/to/PHPMailer/src/Exception.php';
// require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.ionos.de'; // IONOS SMTP
$mail->SMTPAuth = true;
$mail->Username = 'noreply@zentras-systems.com';
$mail->Password = getenv('SMTP_PASSWORD') ?: 'YOUR_SMTP_PASSWORD_HERE'; // Set in IONOS config or .env
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Basic input sanitization
    $data = array_map('htmlspecialchars', $data);

    // Validation
    if (empty($data['name']) || empty($data['company']) || empty($data['email'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Name, Klinik und E-Mail sind erforderlich.']);
        exit;
    }

    // Validate email format
    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Ungültige E-Mail-Adresse.']);
        exit;
    }

    try {
        // Internal notification email
        $mail->setFrom('noreply@zentras-systems.com', 'ZENTRAS Systems');
        $mail->addAddress('kontakt@zentras-systems.com');
        $mail->Subject = "Neue Demo-Anfrage von {$data['name']} ({$data['company']})";
        $mail->isHTML(true);
        $mail->Body = generateNotificationHTML($data);
        $mail->send();
        $mail->clearAddresses();

        // Confirmation email to user
        $mail->addAddress($data['email']);
        $mail->Subject = 'Ihre Demo-Anfrage bei ZENTRAS Systems';
        $mail->Body = generateConfirmationHTML($data);
        $mail->send();

        echo json_encode(['success' => true, 'message' => 'Demo-Anfrage erfolgreich gesendet']);
    } catch (Exception $e) {
        error_log("Mail error: " . $mail->ErrorInfo);
        http_response_code(500);
        echo json_encode(['error' => 'E-Mail-Versand fehlgeschlagen. Bitte versuchen Sie es später erneut.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}

function generateNotificationHTML($data) {
    $phone = !empty($data['phone']) ? "<p><strong>Telefon:</strong> {$data['phone']}</p>" : "";
    $message = !empty($data['message']) ? "<p><strong>Nachricht:</strong></p><p>" . nl2br($data['message']) . "</p>" : "";

    return "
        <h1>Neue Demo-Anfrage</h1>
        <p><strong>Name:</strong> {$data['name']}</p>
        <p><strong>Klinik/Organisation:</strong> {$data['company']}</p>
        <p><strong>E-Mail:</strong> {$data['email']}</p>
        {$phone}
        {$message}
        <hr>
        <p><small>Diese Anfrage wurde über das Kontaktformular auf zentras-systems.com gesendet.</small></p>
    ";
}

function generateConfirmationHTML($data) {
    $phone = !empty($data['phone']) ? "<li><strong>Telefon:</strong> {$data['phone']}</li>" : "";

    return "
        <h1>Vielen Dank für Ihre Anfrage, {$data['name']}!</h1>
        <p>Wir haben Ihre Demo-Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        <h2>Ihre Angaben:</h2>
        <ul>
          <li><strong>Klinik/Organisation:</strong> {$data['company']}</li>
          <li><strong>E-Mail:</strong> {$data['email']}</li>
          {$phone}
        </ul>
        <hr>
        <p>Mit freundlichen Grüßen,<br>Ihr ZENTRAS Systems Team</p>
        <p><small>ZENTRAS Systems UG | Pater-Prinz-Weg 9, 50997 Köln | kontakt@zentras-systems.com</small></p>
    ";
}
?>