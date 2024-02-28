<?php
require_once("dbcontroller.php");

$db_handle = new DBController();
$mysqli = $db_handle->connectDB();

$name = $email = $mobile = $dob  = $state = $city = $gender = $password = $confirm_password = '';


if ($_SERVER["REQUEST_METHOD"] == "POST") {


    if (
        isset($_POST["name"]) &&  isset($_POST["email"]) && isset($_POST["mobile"]) && isset($_POST["dob"])
        && isset($_POST["state"]) && isset($_POST["city"]) && isset($_POST["gender"]) && isset($_POST["password"]) && isset($_POST["confirm_password"])
    ) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $mobile = $_POST['mobile'];
        $dob = $_POST['dob'];
        $state = $_POST['state'];
        $city = $_POST['city'];
        $gender = $_POST['gender'];
        $password = $_POST['password'];
        $confirm_password = $_POST['confirm_password'];

        $emailExistsQuery = mysqli_query($mysqli, "SELECT * FROM user_login WHERE email = '$email'");
        if (mysqli_num_rows($emailExistsQuery) > 0) {
            echo '<script type="text/javascript"> alert("Email already exists. Please use a different email address.") </script>';
            exit;
        }

        // if (empty($firstname) || empty($lastname) || empty($email) || empty($mobile) || empty($dob) || empty($pincode) || empty($gender) || empty($country) || empty($state) || empty($city) || empty($hobbies) || empty($address) || empty($image)) {
        //     echo "All fields are required.";
        //     exit;
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email address.";
            exit;
        } elseif (!preg_match('/^\d{10}$/', $mobile)) {
            echo "Invalid mobile number.It should be 10 digits.";
            exit;
        }

        function isPasswordValid($password)
        {
            $uppercase = preg_match('@[A-Z]@', $password);
            $lowercase = preg_match('@[a-z]@', $password);
            $number = preg_match('@[0-9]@', $password);
            $specialChar = preg_match('/[!@#$%^&*(),.?":{}|<>]/', $password);

            return $uppercase && $lowercase && $number && $specialChar && strlen($password) >= 8;
        }

        // if (isPasswordValid($password)) {

        //     $image = '' . $newname;
        //     move_uploaded_file($_FILES['image']['tmp_name'], $image);


        $db_handle = new DBController();
        $mysqli = $db_handle->connectDB();


        $result = mysqli_query($mysqli, "INSERT into user_profile values('', '$name', '$email', '$mobile', '$dob', '$state', '$city', '$gender',  '', '', '', '')");
        $result = mysqli_query($mysqli, "INSERT into user_login values('', '$name', '$email', '$mobile', '$password', '$confirm_password',  '', '', '', '')");

        if ($result) {
            echo
            '<script type="text/javascript"> alert("Successfully Submitted") </script>';
            header('location:login.php');
        } else {
            echo
            '<script type="text/javascript"> alert("Failed") </script>';
        }
    }
}
// }
