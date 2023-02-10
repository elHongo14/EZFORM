<?php
$name = $_POST['name'];
$mail = $_POST['email'];
$message = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion(8.0) . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su correo es: " . $mail . " \r\n";
$message .= "Mensaje: " . $_POST['comentarios'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'elhongo1409@outlook.com';
$asunto = 'el pepe ete sech';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>