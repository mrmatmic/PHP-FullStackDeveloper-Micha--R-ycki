<?php
    $nazwaserwera = "localhost";
    $login = "root";
    $haslo = "";
    $baza = "pracownicy";

    $polaczenie = new mysqli($nazwaserwera, $login, $haslo, $baza);

    if ($polaczenie->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
?>