<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from request
    $data = json_decode(file_get_contents('php://input'), true);
    
    $userName = isset($data['userName']) ? htmlspecialchars($data['userName']) : '';
    $mobileNumber = isset($data['mobileNumber']) ? htmlspecialchars($data['mobileNumber']) : '';
    
    // Validate inputs
    if (empty($userName) || empty($mobileNumber)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'All fields are required']);
        exit;
    }
    
    // Email configuration
    $to = '26rakkesh@gmail.com';
    $subject = 'Account Deletion Request - inSTA';
    $timestamp = date('Y-m-d H:i:s');
    
    // Email body
    $message = "Account Deletion Request\n\n";
    $message .= "Name: " . $userName . "\n";
    $message .= "Mobile Number: " . $mobileNumber . "\n\n";
    $message .= "Please process this account deletion request.\n\n";
    $message .= "Submitted on: " . $timestamp;
    
    // Email headers
    $headers = "From: noreply@m-insta.com\r\n";
    $headers .= "Reply-To: noreply@m-insta.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to send email']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>
