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
    <title>User Dashboard</title>
</head>

<body>
    <div class="container d-flex justify-content-center">
        <div class="card col-4 mt-5">
            <div class="py-3">
                <h4>Profile</h4>
            </div>
            <?php
            session_start();

            $nameValue = isset($_SESSION['name']) ? $_SESSION['name'] : '';
            $mobileValue = isset($_SESSION['mobile']) ? $_SESSION['mobile'] : '';
            $emailValue = isset($_SESSION['valid']) ? $_SESSION['valid'] : '';
            ?>
            <form name="myForm" id="myForm_signup" action="profile_code.php" method="POST">
                <div class="px-3">
                    <div>
                        <label for="user_name"><strong>User Name</strong></label>
                    </div>
                    <div>
                        <input type="text" name="name" id="name" minlength="2" maxlength="50" value="<?php echo $nameValue; ?>" required>
                    </div>
                    <div>
                        <label class="text-danger" id="name_alert"></label>
                    </div>
                </div>

                <div class="px-3">
                    <div>
                        <label for="user_mobile"><strong>Mobile</strong></label>
                    </div>
                    <div>
                        <input type="mobile" name="mobile" id="mobile" minlength="2" maxlength="50" value="<?php echo $mobileValue; ?>" required>
                    </div>
                    <div>
                        <label class="text-danger" id="mobile_alert"></label>
                    </div>
                </div>

                <div class="px-3">
                    <div>
                        <label for="user_email"><strong>Email</strong></label>
                    </div>
                    <div>
                        <input type="email" name="email" id="email" minlength="2" maxlength="50" value="<?php echo $emailValue; ?>" required>
                    </div>
                    <div>
                        <label class="text-danger" id="email_alert"></label>
                    </div>
                </div>

                <div class="text-center mb-2">
                    <a href="complaint_form.php" class="btn btn-dark mb-1 text-white" style="text-decoration: none;">Add Complaint</a>
                </div>
            </form>
        </div>
    </div>
</body>

</html>