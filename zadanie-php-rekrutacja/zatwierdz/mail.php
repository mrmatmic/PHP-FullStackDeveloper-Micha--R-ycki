<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
$mail = new PHPMailer(true);
$mail->SMTPOptions = array(
    'ssl' => array(
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true
    )
);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'jantestowy172@gmail.com'; 
$mail->Password = 'pbsvnciewhsovgls';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('jantestowy172@gmail.com'); 

$mail->isHTML(true);
$mail->Subject = "Potwierdzenie rejestracji";

?>