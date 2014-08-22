<?php

require("phpmail/class.phpmailer.php");

$mail = new PHPMailer();

$mail->From = "douwe@dropandreport.com";
$mail->AddReplyTo($_POST["email"], $_POST["name"]);

$mail->FromName = addslashes(utf8_decode($_POST["name"]));
$mail->AddAddress("rianasnel@hotmail.com");

$mail->Subject  = "E-mail van je NCSAH Template";
$mail->Body     = "From: ". $_POST["name"] . "\r\n";
$mail->Body     .= "Email: ". $_POST["email"] . "\r\n";
$mail->Body     .= "Message: ". addslashes(utf8_decode($_POST["message"]));

if(!$mail->Send()) {
$return['success'] = false;
}

	else
{
$return['success'] = true;
}

echo json_encode($return);


?>
