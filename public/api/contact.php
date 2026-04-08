<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

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

    // EMAIL CONFIGURATION
    $to = 'kontakt@zentras-systems.com'; // ZENTRAS target email
    
    // Custom routing based on source
    if (isset($data['source']) && $data['source'] === 'strykersymposium') {
        $to = 'ulrich.elias@zentras-systems.com';
    }

    $senderDomain = 'zentras-systems.com'; // Must match your IONOS domain
    $senderEmail = 'noreply@' . $senderDomain;

    // 1. Send Internal Notification
    $subjectNotification = "Neue Demo-Anfrage von {$data['name']} ({$data['company']})";
    $bodyNotification = generateNotificationHTML($data);
    
    $headersNotification = "MIME-Version: 1.0\r\n";
    $headersNotification .= "Content-type: text/html; charset=UTF-8\r\n";
    $headersNotification .= "From: ZENTRAS Systems <{$senderEmail}>\r\n";
    $headersNotification .= "Reply-To: {$data['name']} <{$data['email']}>\r\n";
    $headersNotification .= "X-Mailer: PHP/" . phpversion();

    $mail1 = mail($to, $subjectNotification, $bodyNotification, $headersNotification);

    // 2. Send Confirmation to User
    $subjectConfirmation = 'Ihre Demo-Anfrage bei ZENTRAS Systems';
    $bodyConfirmation = generateConfirmationHTML($data);
    
    $headersConfirmation = "MIME-Version: 1.0\r\n";
    $headersConfirmation .= "Content-type: text/html; charset=UTF-8\r\n";
    $headersConfirmation .= "From: ZENTRAS Systems <{$senderEmail}>\r\n";
    $headersConfirmation .= "X-Mailer: PHP/" . phpversion();

    $mail2 = mail($data['email'], $subjectConfirmation, $bodyConfirmation, $headersConfirmation);

    if ($mail1) {
        echo json_encode(['success' => true, 'message' => 'Demo-Anfrage erfolgreich gesendet']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'E-Mail-Server Fehler (IONOS).']);
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