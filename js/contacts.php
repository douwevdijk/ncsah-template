<?php
	//$from = $_POST['douwe@hiphop.nl'];

	$to = "info@bbvught.nl";
	$subject = "Email from BBVught.nl";
	$headers = "From: BB Vught <info@bbvught.nl>";
	$headers .= "\r\n";
	$headers .= "Reply-To: " . $_POST['email'];
	$message = "Details of message: \n";
	$message .= "\nFirst Name: " . $_POST['fname'];
	$message .= "\nLast Name: " . $_POST['lname'];
	$message .= "\nEmail address: " . $_POST['email'];
	$message .= "\nMessage: " . $_POST['message'];
	$sentOk = mail($to,$subject,$message,$headers);
?>

	