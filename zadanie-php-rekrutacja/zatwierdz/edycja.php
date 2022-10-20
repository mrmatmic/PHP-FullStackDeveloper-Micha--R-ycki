<?php

header('Content-Type: text/html; charset=utf-8');
header("Access-Control-Allow-Origin: *");
include 'polaczenie.php';

$id =  $_POST["id_pracownika"];
$imie = $_POST["imie"];
$nazwisko = $_POST["nazwisko"];
$email = $_POST["email"];
$opis = $_POST["opis"];
$zawod = $_POST["zawod"];
$dodatek1 = $_POST["dodatek1"];
$dodatek2 = $_POST["dodatek2"];
$zna = $_POST["zna"];


if($zawod == "projectmanager")
{
    $sql = "UPDATE pracownik SET imie='$imie', nazwisko='$nazwisko', email='$email', opis='$opis', stanowisko='Project Manager' WHERE id_pracownika = '$id'";
    $wynik = mysqli_query($polaczenie,$sql);
    $sprawdz_rekord="";

    $sql = "SELECT id_pracownika FROM project_manager WHERE id_pracownika = '$id'";
    $wynik = mysqli_query($polaczenie,$sql);
    if ($wynik->num_rows > 0) {
        while($wiersz = $wynik->fetch_assoc()) {
        $sprawdz_rekord = $wiersz["id_pracownika"];
        }
    }
    if($sprawdz_rekord == "")
    {
        $sql = "INSERT INTO project_manager VALUES ('$id','$dodatek1','$dodatek2','$zna')";
        $wynik = mysqli_query($polaczenie,$sql);
        $sql = "DELETE FROM tester WHERE id_pracownika = '$id'";
        $wynik = mysqli_query($polaczenie,$sql);
        $sql = "DELETE FROM developer WHERE id_pracownika = '$id'";
        $wynik = mysqli_query($polaczenie,$sql);
    }
    else{
        $sql = "UPDATE project_manager SET metodologie_prowadzenia_projektow='$dodatek1', systemy_raportowe='$dodatek2', zna_scrum='$zna' WHERE id_pracownika = '$id'";
        $wynik = mysqli_query($polaczenie,$sql);
    }
}
else if($zawod == "developer")
{
    $sql = "UPDATE pracownik SET imie='$imie', nazwisko='$nazwisko', email='$email', opis='$opis', stanowisko='Developer' WHERE id_pracownika = '$id'";
    $wynik = mysqli_query($polaczenie,$sql);

    $sprawdz_rekord="";

    $sql = "SELECT id_pracownika FROM developer WHERE id_pracownika = '$id'";
    $wynik = mysqli_query($polaczenie,$sql);
    if ($wynik->num_rows > 0) {
        while($wiersz = $wynik->fetch_assoc()) {
        $sprawdz_rekord = $wiersz["id_pracownika"];
        }
    }
    if($sprawdz_rekord == "")
    {
        $sql = "INSERT INTO developer VALUES ('$id','$dodatek1','$dodatek2','$zna')";
        $wynik = mysqli_query($polaczenie,$sql);
        $sql = "DELETE FROM tester WHERE id_pracownika = '$id'";
        $wynik = mysqli_query($polaczenie,$sql);
        $sql = "DELETE FROM project_manager WHERE id_pracownika = '$id'";
        $wynik = mysqli_query($polaczenie,$sql);
    }
    else{
        $sql = "UPDATE developer SET srodowiska_ide='$dodatek1', jezyki_programowania='$dodatek2', zna_sql='$zna' WHERE id_pracownika = '$id'";
        $wynik = mysqli_query($polaczenie,$sql);
    }
   
}
if($zawod == "tester")
{
    $sql = "UPDATE pracownik SET imie='$imie', nazwisko='$nazwisko', email='$email', opis='$opis', stanowisko='Tester' WHERE id_pracownika = '$id'";
    $wynik = mysqli_query($polaczenie,$sql);

    $sprawdz_rekord="";

    $sql = "SELECT id_pracownika FROM tester WHERE id_pracownika = '$id'";
    $wynik = mysqli_query($polaczenie,$sql);
    if ($wynik->num_rows > 0) {
        while($wiersz = $wynik->fetch_assoc()) {
        $sprawdz_rekord = $wiersz["id_pracownika"];
        }
    }
    if($sprawdz_rekord == "")
    {
        $sql = "INSERT INTO tester VALUES ('$id','$dodatek1','$dodatek2','$zna')";
        $wynik = mysqli_query($polaczenie,$sql);
        $sql = "DELETE FROM project_manager WHERE id_pracownika = '$id'";
        $wynik = mysqli_query($polaczenie,$sql);
        $sql = "DELETE FROM developer WHERE id_pracownika = '$id'";
        $wynik = mysqli_query($polaczenie,$sql);
    }
    else{
        $sql = "UPDATE tester SET systemy_testujace='$dodatek1', systemy_raportowe='$dodatek2', zna_selenium='$zna' WHERE id_pracownika = '$id'";
        $wynik = mysqli_query($polaczenie,$sql);
    }
}
$polaczenie->close();
echo " Wykonano edycję";
?>