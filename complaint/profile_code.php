<?php
include("db.php");
mysqli_select_db($con, "complaint");
if (isset($_POST['add_button'])) {
    $email = $_POST['email'];
    $query  = "SELECT * FROM user_profile WHERE email = '$email'";
    $result = mysqli_query($con, $query);

    while ($row = mysqli_fetch_array($result)) {
    }
}
