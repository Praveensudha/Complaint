<!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    <title>Login</title>
</head>

<body>

    <?php
    // require_once("dbcontroller.php");

    // session_start(); // Start session at the beginning

    // if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {

    //     $email = $_POST['email'];
    //     $password = $_POST['password'];

    //     $db_handle = new DBController();
    //     $mysqli = $db_handle->connectDB();

    //     $stmt = $mysqli->prepare("SELECT * FROM user_login WHERE email = ?");
    //     $stmt->bind_param("s", $email);
    //     $stmt->execute();
    //     $result = $stmt->get_result();
    //     $user = $result->fetch_assoc();

    //     if ($user && password_verify($password, $user["password"])) {
    //         $_SESSION["user"] = "yes";
    //         header("Location: profile.php");
    //         exit;
    //     } else {
    //         echo '<script type="text/javascript"> alert("Invalid email or password")</script>';
    //     }

    //     $stmt->close();
    //     $mysqli->close();
    // }
    ?>

    <div class="container d-flex justify-content-center">
        <div class="card col-4 mt-5">
            <div class="py-3">
                <h4>Login Form</h4>
            </div>

            <form name="myForm" id="myForm_signup" action="login.php" method="POST">

                <div class="px-3">
                    <div>
                        <label for="user_name"><strong>User Name</strong></label>
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Enter your username" minlength="2" maxlength="30" required>
                    </div>
                    <div>
                        <label class="text-danger" id="email_alert"></label>
                    </div>
                </div>

                <div class="px-3">
                    <div>
                        <label for="password"><strong>Password</strong></label>
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Enter your password" required>
                        <i class="far fa-eye" id="togglePassword"></i>
                    </div>
                    <div>
                        <label class="text-danger" id="password_alert"></label>
                    </div>
                </div>

                <div class="text-center pb-3">
                    <div class="mb-2">
                        <input type="submit" class="btn-primary mb-1" id="add_button" value="Submit" name="login">
                    </div>
                    <h6>Don't have an account?!
                        <a href="signup.php" class="ms-2">SignUp</a>
                    </h6>
                </div>

            </form>
        </div>
    </div>

    <script type="text/javascript" src="validation.js"></script>
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function() {
            const passwordField = document.getElementById('password');
            const togglePassword = document.getElementById('togglePassword');

            togglePassword.addEventListener('click', function() {
                togglePasswordFieldVisibility(passwordField, togglePassword);
            });

            function togglePasswordFieldVisibility(field, toggleButton) {
                const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
                field.setAttribute('type', type);
                toggleButton.classList.toggle('fa-eye-slash');
            }
        });
    </script>

</body>

</html> -->
<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    <title>Login</title>
</head>

<body>
    <?php

    // if (isset($_POST["login"])) {
    //     $email = $_POST["email"];
    //     $password = $_POST["password"];

    //     require_once("dbcontroller.php");


    //     $result = mysqli_query($mysqli, "SELECT * FROM user_login WHERE email = '$email'");
    //     $user = mysqli_fetch_array($result);

    //     if ($user) {
    //         if (password_verify($password, $user["password"])) {

    //             session_start();

    // $_SESSION["email"] = $user["email"];
    // $_SESSION["passwcord"] = $user["password"];
    // $_SESSION["user"] = $user;

    //             $_SESSION["complaint"] = "yes";
    //             header("Location: profile.php");
    //             exit();
    //         } else {
    //             echo "<div class='alert alert-danger'>Password does not match</div>";
    //         }
    //     } else {
    //         echo "<div class='alert alert-danger'>User not found</div>";
    //     }
    // }



    // if(isset($_POST["login"])) {
    //     $email = $_POST["email"];
    //     $password = $_POST["password"];
    //     require_once "db.php";
    //     $sql = "SELECT * FROM user_login WHERE email = '$email'";
    //     $result = mysqli_query($conn, $sql);
    //     $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
    //     if($user) {
    //         if(password_verify($password, $user["password"])) {
    //             session_start();
    //             $_SESSION["user"] = "yes";
    //             die();

    //     } else {
    //             echo "<div class='alert alert-danger'>Password does not match</div>";
    //         } else {
    //             echo "<div class='alert alert-danger'>Email does not match</div>";
    //         }
    //     }
    // }

    // session_destroy();
    // Start the session
    // session_start();
    include("db.php");
    if (isset($_POST['add_button'])) {
        $email = mysqli_real_escape_string($con, $_POST['email']);
        $password = isset($_POST['password']) ? mysqli_real_escape_string($con, $_POST['password']) : '';

        $result = mysqli_query($con, "SELECT * FROM user_login WHERE (email='$email') AND Password='$password' ") or die("Select Error");
        $row = mysqli_fetch_assoc($result);

        if (!empty($row)) {
            $_SESSION['valid'] = $row['email'];
            $_SESSION['mobile'] = $row['mobile'];
            $_SESSION['name'] = $row['name'];
            $_SESSION['id'] = $row['id'];
        } else {
            echo "<div class='message'>
                     <p>Wrong Username or Password</p>
                      </div>";
        }

        if (isset($_SESSION['valid'])) {
            header('Location: profile.php');
        }
        // } else {
        //     echo 'login error';
    }


    ?>

    <div class="container d-flex justify-content-center">
        <div class="card  col-4 mt-5">

            <div class="py-3">
                <h4>Login Form</h4>
            </div>

            <form name="myForm" id="myForm_signup" method="POST">


                <div class="px-3">
                    <div>
                        <label for="user_name"><strong>User Name</strong></label>
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Enter your username" minlength="2" maxlength="50" required>
                    </div>
                    <div>
                        <label class="text-danger" id="email_alert"></label>
                    </div>
                </div>

                <div class="px-3">
                    <div>
                        <label for="password"><strong>Password</strong></label>
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Enter your password" required>
                        <i class="far fa-eye" id="togglePassword"></i>
                    </div>
                    <div>
                        <label class="text-danger" id="password_alert"></label>
                    </div>
                </div>

                <div class="text-center pb-3 ">
                    <div class="mb-2">
                        <input type="submit" class="btn-primary mb-1" id="add_button" name="add_button" value="Submit">
                    </div>
                    <h6>Don't have an account?!
                        <a href="signup.php" class="ms-2 text-dark fw-bolder" style="text-decoration: none;">SignUp</a>
                    </h6>
                </div>

            </form>

        </div>
    </div>
</body>



<script type="text/javascript" src="validation.js"></script>
<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
        const passwordField = document.getElementById('password');
        const togglePassword = document.getElementById('togglePassword');

        togglePassword.addEventListener('click', function() {
            togglePasswordFieldVisibility(passwordField, togglePassword);
        });

        function togglePasswordFieldVisibility(field, toggleButton) {
            const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
            field.setAttribute('type', type);
            toggleButton.classList.toggle('fa-eye-slash');
        }
    });
</script>

</html>