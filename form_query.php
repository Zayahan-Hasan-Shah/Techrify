<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    $name = $_POST['name'];
    $inquiryType = $_POST['inquiry-type'];
    $email = $_POST['email'];
    $budget = $_POST['budget'];

    // Recipient email address
    $to = "ali@techrify.co";

    // Email subject
    $subject = "New Inquiry from $name";

    // Email message
    $message = "Name: $name\n";
    $message .= "Inquiry Type: $inquiryType\n";
    $message .= "Email: $email\n";
    $message .= "Budget: $budget";

    // Send email
    mail($to, $subject, $message);

    // Include thank-you pop-up
    include('thank-you.html');
}
?>