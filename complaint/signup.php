<?php
require_once("dbcontroller.php");
require_once("signup_code.php");
$db_handle = new DBController();
$query = "SELECT * FROM state";
$result = $db_handle->runQuery($query);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignUp</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>

<body>
    <div class="container-fluid bg-con">

        <div class="container">

            <div class="p-4">
                <h4>SignUp Form</h4>
            </div>
            <!-- First Form -->

            <form name="myForm" id="myForm_signup" class="" action="signup_code.php" method="POST" enctype="multipart/form-data">
                <form name="myForm" id="myForm_signup" class="" action="user_login.php" method="POST" enctype="multipart/form-data">
                    <div class="row d-flex">
                        <div class=" col-lg-6 col-md-4">
                            <div class="mb-1">
                                <label for="name"><strong>Name</strong></label>
                            </div>
                            <div>
                                <input type="text" name="name" id="name" placeholder="Enter your name" minlength="2" maxlength="50" required>
                            </div>
                            <div>
                                <label class="text-danger" id="name_alert"></label>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-4">
                            <div class="mb-1">
                                <label class="fw-bolder" for="email">Email</label>
                            </div>
                            <div>
                                <input type="email" name="email" id="email" placeholder="Enter your email" minlength="2" maxlength="100" required>
                            </div>
                            <div>
                                <label class="text-danger" id="email_alert"></label>
                            </div>
                        </div>

                        <div class=" col-lg-6 col-md-4">
                            <div class="mb-1">
                                <label class="fw-bolder" for="mobile">Mobile</label>
                            </div>
                            <div>
                                <input type="mobile" name="mobile" id="mobile" placeholder="Enter your number" minlength="2" maxlength="20" required>
                            </div>
                            <div>
                                <label class="text-danger" id="mobile_alert"></label>
                            </div>
                        </div>

                        <div class=" col-lg-6 col-md-4">
                            <div class="mb-1">
                                <label class="fw-bolder" for="dob">DOB</label>
                            </div>
                            <div>
                                <input type="date" name="dob" id="dob" required>
                            </div>
                            <div>
                                <label class="text-danger" id="dob_alert"></label>
                            </div>
                        </div>


                        <div class=" col-lg-6 col-md-4">
                            <div class="mb-1">
                                <label for="state"><strong>Select State</strong></label>
                            </div>
                            <div class="">
                                <select name="state" id="state" class="InputBox w-100" onChange="getCity(this.value);" required>
                                    <option value="">Select State</option>
                                    <?php
                                    foreach ($result as $state) {
                                    ?>
                                        <option value="<?php echo $state["id"]; ?>"><?php echo $state["state_name"]; ?>
                                        </option>
                                    <?php
                                    }
                                    ?>
                                </select>
                                <div>
                                    <label class="text-danger" id="state_alert"></label>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-6 col-md-4">
                            <div class="md-1">
                                <label for="city"><strong>Select City</strong></label>
                            </div>
                            <select name="city" id="city" class="InputBox w-100" required>
                                <option value=""> Select City</option>
                            </select>
                            <div>
                                <label class="text-danger" id="city_alert"></label>
                            </div>
                        </div>


                        <!-- gender -->
                        <div class="col-lg-6 col-md-4">
                            <div class="mb-1">
                                <label for="gender"><strong>Select Gender</strong>
                            </div>
                            <div>
                                <input type="radio" name="gender" placeholder required="male" id="gender_male" value="male"> <label for="male">Male</label>
                                <input type="radio" name="gender" placeholder required="female" id="gender_female" value="female"> <label for="female">Female</label>
                                <input type="radio" name="gender" placeholder required="other" id="gender_other" value="other"> <label for="other">Other</label>
                            </div>
                            <div>
                                <label class="text-danger" id="gender_alert"></label>
                            </div>
                        </div>

                        <!-- password -->
                        <div class="col-lg-6 col-md-4">
                            <div class="mb-1">
                                <label for="password"><strong>Password</strong></label>
                            </div>
                            <div>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="Enter your password" required>
                                    <i class="far fa-eye" id="togglePassword"></i>
                                </div>
                                <div>
                                    <label class="text-danger" id="password_alert"></label>
                                </div>
                            </div>
                        </div>

                        <!-- confirm_password -->
                        <div class="col-lg-6 col-md-4 mt-1">
                            <div class="mb-1">
                                <label for="password"><strong>Confirm Password</strong></label>
                            </div>
                            <div>
                                <div>
                                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm your password" required>
                                    <i class="far fa-eye" id="toggleConfirmPassword"></i>
                                </div>
                                <div>
                                    <label class="text-danger" id="confirm_password_alert"></label>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-3">
                            <input type="submit" class="btn-primary mb-1" id="add_button" name="add_button" value="Submit">
                            <div class="mb-5">
                                <h6>Already Registered?
                                    <a href="login.php" class="ms-2 text-dark fw-bolder" style="text-decoration: none;">Login</a>
                                </h6>
                            </div>
                        </div>
                    </div>

                </form>
            </form>
        </div>
    </div>



</body>


<script type="text/javascript" src="validation.js"></script>
<script type="text/javascript" src="jquery.main.php"></script>

<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
        const passwordField = document.getElementById('password');
        const confirmPasswordField = document.getElementById('confirm_password');
        const togglePassword = document.getElementById('togglePassword');
        const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
        const submitButton = document.getElementById('add_button');

        const passwordRequirements =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

        togglePassword.addEventListener('click', function() {
            togglePasswordFieldVisibility(passwordField, togglePassword);
        });

        toggleConfirmPassword.addEventListener('click', function() {
            togglePasswordFieldVisibility(confirmPasswordField, toggleConfirmPassword);
        });

        submitButton.addEventListener('click', function() {
            if (!validatePassword(passwordField.value)) {
                alert(
                    "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one numeric digit, and one special character."
                );
                return false;
            }

            if (passwordField.value !== confirmPasswordField.value) {
                alert("Passwords do not match.");
                return false;
            }

            document.getElementById('myForm_signup').submit();
        });

        function togglePasswordFieldVisibility(field, toggleButton) {
            const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
            field.setAttribute('type', type);
            toggleButton.classList.toggle('fa-eye-slash');
        }

        function validatePassword(password) {
            return passwordRequirements.test(password);
        }
    });



    function getCity(val) {
        $.ajax({
            type: "POST",
            url: "getCity.php",
            data: 'state_id=' + val,
            success: function(data) {
                $("#city").html(data);
            }
            // error: function(xhr, status, error) {
            //     console.error("Error fetching cities:", error);
            // }
        });
    }
</script>
</body>

</html>