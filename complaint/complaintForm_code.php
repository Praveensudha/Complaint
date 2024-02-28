<?php

require_once("dbcontroller.php");

$subject = $message = $image = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_POST["subject"]) && isset($_POST["message"]) && isset($_FILES["image"])) {

        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $image = $_FILES['image'];

        $uploadFolder = "uploads";
        if (!file_exists($uploadFolder)) {
            mkdir($uploadFolder, 0777, true);
        }

        $imagePath = $uploadFolder . '/' . $image['name'];
        $imageInfo = pathinfo($imagePath);

        $ext = isset($imageInfo['extension']) ? $imageInfo['extension'] : '';

        $length = 3;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[random_int(0, $charactersLength - 1)];
        }

        $newname = $randomString . "." . $ext;
        $imagePath = $uploadFolder . '/' . $newname;

        move_uploaded_file($_FILES['image']['tmp_name'], $imagePath);

        $db_handle = new DBController();
        $mysqli = $db_handle->connectDB();

        $escapedMessage = mysqli_real_escape_string($mysqli, $message);

        $result = mysqli_query($mysqli, "INSERT into complaint_form values('', '$email', '$subject', '$escapedMessage', '$imagePath',  '', '', '', '')");

        if ($result) {
            echo '<script type="text/javascript"> alert("Successfully Submitted") </script>';
            header('Location:complaint_view.php');
        } else {
            echo '<script type="text/javascript"> alert("Failed") </script>';
        }
    }
}
