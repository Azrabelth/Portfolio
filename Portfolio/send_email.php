<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "Lorenzo_de_sisto@hotmail.fr";
    $subject = "New Contact Form Submission";
    $body = "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Message: " . $message;
    
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message.";
    }
}
?>