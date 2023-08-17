<?php
$servername = "https:/127.0.0.1:3306";
$username = "root";
$password = "anjo";
$dbname = "server.php";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("conexão falhou: " . $conn->connect_error);
}
