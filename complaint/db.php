<?php
$hostName = "localhost";
$dbUser = "root";
$dbPassword = "";
$dbName = "complaint";

$con = new mysqli($hostName, $dbUser, $dbPassword, $dbName);

if ($con->connect_error) {
    die("Connection Failed" . $conn->connect_error);
}
