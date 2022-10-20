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

if($zawod == "Tester")
{
    $sql = "SELECT * FROM pracownik INNER JOIN tester ON pracownik.id_pracownika=tester.id_pracownika AND tester.id_pracownika='$id'";
    $wynik = mysqli_query($polaczenie,$sql);
    $uzytkownik = $wynik->fetch_all(MYSQLI_ASSOC);
    echo json_encode($uzytkownik);
}
else if($zawod == "Developer")
{
    $sql = "SELECT * FROM pracownik INNER JOIN developer ON pracownik.id_pracownika=developer.id_pracownika AND developer.id_pracownika='$id'";
    $wynik = mysqli_query($polaczenie,$sql);
    $uzytkownik = $wynik->fetch_all(MYSQLI_ASSOC);
    echo json_encode($uzytkownik);
}
else if($zawod == "Project Manager")
{
    $sql = "SELECT * FROM pracownik INNER JOIN project_manager ON pracownik.id_pracownika=project_manager.id_pracownika AND project_manager.id_pracownika='$id'";
    $wynik = mysqli_query($polaczenie,$sql);
    $uzytkownik = $wynik->fetch_all(MYSQLI_ASSOC);
    echo json_encode($uzytkownik);
}
$polaczenie->close();

?>