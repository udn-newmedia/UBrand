<?php
require 'PHPMailer/class.phpmailer.php';

if (array_key_exists('name', $_POST) 
  && array_key_exists('phone', $_POST) 
  && array_key_exists('email', $_POST)
  && array_key_exists('title', $_POST)
  && array_key_exists('message', $_POST)) {

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $title = $_POST['title'];
    $message = $_POST['message'];

    $system_email='stu005606@gmail.com';
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPSecure = 'ssl';
    $mail->SMTPAuth = true;
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 465;
    $mail->Username = 'taijiun.fang@udngroup.com.tw';
    $mail->Password = 'hsnet92979@udn';
    $mail->setFrom($email);
    // $mail->SetFrom($system_email, mb_encode_mimeheader($email,"UTF-8"));
    $mail->addAddress($system_email);
    $mail->Subject = $title;
    $mail->Body = $message;

    //send the message, check for errors
    if (!$mail->send()) {
        echo "ERROR: " . $mail->ErrorInfo;
    } else {
        echo "SUCCESS";
    }
    // clear the fields
} else {
    echo 'ERROR';
}
?>