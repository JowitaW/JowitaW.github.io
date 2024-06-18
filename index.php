<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "302374196@student.rocmondriaan.nl";
    $from = $_POST['email'];
    $message = $_POST['message'];
    $subject = "New Contact Form Submission";

    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "<html><body>";
    $body .= "<p>Email: " . htmlspecialchars($from) . "</p>";
    $body .= "<p>Message:</p>";
    $body .= "<p>" . nl2br(htmlspecialchars($message)) . "</p>";
    $body .= "</body></html>";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
