<?php

// require_once("dbcontroller.php");
// $db_handle = new DBController();
// $mysqli = $db_handle->connectDB();
// $query = "select * from complaint_form";
// $result = $db_handle->runQuery($query);

require_once("db.php");

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
    <title>Complaint Form</title>
</head>

<body>
    <div class="container d-flex justify-content-center">
        <div class="card  col-4 mt-5">

            <div class="py-3">
                <h4>Complaint Form</h4>
            </div>

            <?php

            $subjectValue = isset($_SESSION["subject"]) ? $_SESSION["subject"] : "";
            $messageValue = isset($_SESSION["message"]) ? $_SESSION["message"] : "";
            $imageValue = isset($_SESSION["image"]) ? $_SESSION["image"] : "";

            ?>

            <form name="myForm" id="myForm_signup" action="complaintForm_code.php" method="POST" enctype="multipart/form-data">
                <div class="px-3">


                    <input type="hidden" name="email" id="email" value="<?php echo $_SESSION['valid']; ?>">


                    <div>
                        <label class="fw-bolder" for="subject">Subject</label>
                    </div>
                    <div class="mt-1">
                        <input type="text" name="subject" id="subject" placeholder="Enter your subject" minlength="2" maxlength="100" value="<?php echo $subjectValue; ?>" required>
                    </div>
                    <div>
                        <label class="text-danger" id="subject_alert"></label>
                    </div>
                </div>

                <div class="px-3">
                    <label class="fw-bolder" for="message">Message</label>
                </div>
                <div class="px-3  mt-1 ">
                    <textarea name="message" id="message" style="width: 100%;" rows="4"><?php echo $messageValue; ?></textarea>
                </div>
                <div>
                    <label class="text-danger" id="message_alert" for="message"></label>
                </div>

                <div class="px-3">
                    <div>
                        <label class="fw-bolder" for="file">Upload File</label>
                    </div>
                    <div class="input-group mt-1">
                        <input type="file" class="form-control" name="image" id="image" value="<?php echo $imageValue; ?>" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                    </div>
                    <div>
                        <label class="text-danger" id="file_alert" for="image"></label>
                    </div>
                </div>

                <div class="d-flex justify-content-center pb-3">
                    <div class="me-3">
                        <button type="submit" class="btn-primary mb-1 text-white">Submit</button>
                    </div>
                </div>

                <div class="d-flex justify-content-center pb-3">
                    <div class="me-3">
                        <a href="complaint_view.php" class="mb-1 text-dark fw-bolder" id="add_button" name="add_button">View</a>
                    </div>
                </div>
        </div>

        </form>

    </div>
    </div>

    <script type="text/javascript" src="validation.js"></script>
    <script type="text/javascript" src="jquery.main.php"></script>
</body>

</html>