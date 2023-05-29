<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$email = $_POST['mail']; // Берём данные из input c атрибутом name="mail"
$text = $_POST['text']; // Берём данные из input c атрибутом name="text"
 
$token = "6039534305:AAEfqmmR0WHvbYzVs-SDVnEvNjFOq0iewd0"; // Тут пишем токен
$chat_id = "886625456"; // Тут пишем ID чата, куда будут отправляться сообщения
$sitename = "jobstart"; //Указываем название сайта
 
$arr = array(
 
  'Заказ с сайта: ' => $sitename,
  'Имя: ' => $name,
  'Email: ' => $email,
  'Текст' => $text
);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
?>