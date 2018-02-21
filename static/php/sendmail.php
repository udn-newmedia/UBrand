<?php
header('Access-Control-Allow-Origin: https://udn.com');
require 'PHPMailer/class.phpmailer.php';

// array_key_exists('name', $_POST) 檢查存在有值 

if ($_POST['password'] == 'udnnmd') {
    $name=$_POST['name'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    $title=$_POST['title'];
    $message=$_POST['message'];
    
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPSecure = 'ssl';
    $mail->SMTPAuth = true;
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 465;
    $mail->Username = 'ubrandstudio@udngroup.com.tw';
    $mail->Password = 'UDN06696';
    $mail->setFrom($email);
    $mail->addAddress('ubrandstudio@udngroup.com.tw');
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $title;
    $mail->IsHTML(true);
    $mail->Body = 
        "
        <b>客戶資料</b><br/><br/>
        姓名：$name <br/> 
        電話：$phone <br/>
        email：$email <br/>
        主旨：$title <br/>
        簡述：$message <br>
        ";
    //send the message, check for errors
    if (!$mail->send()) {
        echo "ERROR: " . $mail->ErrorInfo;
    } else {
        echo "SUCCESS";
    }
}