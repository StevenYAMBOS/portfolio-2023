<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/home/stevenyambos/Téléchargements/PHPMailer-master/src/PHPMailer.php';
require '/home/stevenyambos/Téléchargements/PHPMailer-master/src/SMTP.php';
require '/home/stevenyambos/Téléchargements/PHPMailer-master/src/Exception.php';


require 'vendor/autoload.php'; // Chemin vers l'autoloader de PHPMailer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "stevenyambos@gmail.com"; // Remplacez par votre adresse e-mail
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $fromEmail = $_POST["email"];

    // Instancier PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuration du serveur SMTP (vous devrez configurer ces valeurs)
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'stevenyambos@gmail.com';
        $mail->Password = 'mukblxfxanwqozxw';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Destinataire et expéditeur
        $mail->setFrom($fromEmail);
        $mail->addAddress($to);

        // Contenu de l'e-mail
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;

        // Envoyer l'e-mail
        $mail->send();
        echo "E-mail envoyé avec succès.";
    } catch (Exception $e) {
        echo "Une erreur s'est produite lors de l'envoi de l'e-mail : " . $mail->ErrorInfo;
    }
}
?>