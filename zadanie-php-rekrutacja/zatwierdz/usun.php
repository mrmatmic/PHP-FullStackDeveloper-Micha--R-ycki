<?php

header('Content-Type: text/html; charset=utf-8');
header("Access-Control-Allow-Origin: *");
include 'polaczenie.php';

$_POST = json_decode(array_keys($_POST)[0], true);
$id =  $_POST["id_pracownika"];
$zawod="";

$sql = "SELECT stanowisko FROM pracownik WHERE id_pracownika = '$id'";
$wynik = mysqli_query($polaczenie,$sql);
if ($wynik->num_rows > 0) {
    while($wiersz = $wynik->fetch_assoc()) {
      $zawod = $wiersz["stanowisko"];
    }
}

$sql = "DELETE FROM pracownik WHERE id_pracownika = '$id'";
$wynik = mysqli_query($polaczenie,$sql);
if($zawod == "Tester")
{
    $sql = "DELETE FROM tester WHERE id_pracownika = '$id'";
    $wynik = mysqli_query($polaczenie,$sql);
}
else if($zawod == "Developer")
{
    $sql = "DELETE FROM developer WHERE id_pracownika = '$id'";
    $wynik = mysqli_query($polaczenie,$sql);
}
else if($zawod == "Project Manager")
{
    $sql = "DELETE FROM project_manager WHERE id_pracownika = '$id'";
    $wynik = mysqli_query($polaczenie,$sql);
}

$polaczenie->close();
?>