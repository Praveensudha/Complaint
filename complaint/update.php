<?php
include("db.php");
include("dbcontroller.php");

function generateRandomString($length = 3)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[random_int(0, $charactersLength - 1)];
    }

    return $randomString;
}

$db_handle = new DBController();
$mysqli = $db_handle->connectDB();

if (isset($_POST['update'])) {

    $id = $_POST['id'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $image = isset($_FILES['image']['name']) ? pathinfo($_FILES['image']['name']) : null;

    if ($image !== null && ($_FILES['image']['error'] == 4 || ($_FILES['image']['size'] == 0 && $_FILES['image']['error'] == 0))) {
        $image = isset($_POST['exist_image']) ? $_POST['exist_image'] : '';
    } elseif ($image !== null) {
        $uploadFolder = "uploads";

        if (!file_exists($uploadFolder)) {
            mkdir($uploadFolder, 0777, true);
        }

        $randomString = generateRandomString();
        $ext = isset($image['extension']) ? $image['extension'] : '';
        $newname = $randomString . "." . $ext;
        $imagePath = $uploadFolder . '/' . $newname;

        if (move_uploaded_file($_FILES['image']['tmp_name'], $imagePath)) {
            $image = $newname;
        } else {
            echo '<script type="text/javascript"> alert("File upload failed") </script>';
            exit();
        }
    }

    $stmt = $mysqli->prepare("UPDATE `complaint_form` SET subject=?, message=?, image=? WHERE id=?");
    $stmt->bind_param('sssi', $subject, $message, $image, $id);
    $result_run = $stmt->execute();

    if ($result_run) {
        echo '<script type="text/javascript"> alert("Data Updated") </script>';
        header('location: complaint_view.php');
        exit();
    } else {
        echo '<script type="text/javascript"> alert("Data Not Updated") </script>';
    }

    $stmt->close();
    $mysqli->close();
}
