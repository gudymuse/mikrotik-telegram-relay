<?php
$token = "7941977307:AAEMcSbTWLIjpS1E0i4hwGnaGfdAeU_yOG8";
$chat_id = "7632479361";

$message = isset($_GET['text']) ? $_GET['text'] : "Pesan kosong";

$url = "https://api.telegram.org/bot$token/sendMessage";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, [
    'chat_id' => $chat_id,
    'text' => $message
]);
$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
