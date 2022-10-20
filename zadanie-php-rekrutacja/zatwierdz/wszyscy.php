<?php

header('Content-Type: text/html; charset=utf-8');
header("Access-Control-Allow-Origin: *");
include 'polaczenie.php';

$sql = "SELECT * FROM pracownik ORDER BY id_pracownika";
$wynik = mysqli_query($polaczenie,$sql);
$uzytkownik = $wynik->fetch_all(MYSQLI_ASSOC);
echo json_encode($uzytkownik);
$polaczenie->close();
?>