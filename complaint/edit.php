<?php
require_once("db.php");
require_once("dbcontroller.php");


$db = new DBController();

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $query = "SELECT * FROM `complaint_form` WHERE `id` ='$id'";


    $result = mysqli_query($con, $query);

    if (!$result) {
        die("query failed" . mysqli_error($con));
    } else {
        $row = mysqli_fetch_assoc($result);
    }

    // $db_handle = new DBController();
    // $result = $db_handle->runQuery($query);
}
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
    <title>Edit</title>
</head>

<body>
    <div class="container d-flex justify-content-center">
        <div class="card  col-4 mt-5">

            <div class="py-3">
                <h4> Edit Complaint Form</h4>
            </div>

            <form name="myForm" id="myForm_signup" action="update.php" method="POST" enctype="multipart/form-data">
                <input type="hidden" name="id" id="id" value="<?php echo (isset($id)) ? $id : ''; ?>">


                <div class="px-3">
                    <div>
                        <label class="fw-bolder" for="subject">Subject</label>
                    </div>
                    <div class="mt-1">
                        <input type="text" name="subject" id="subject" value="<?php echo (!isset($row)) ? '' : $row['subject']; ?>" placeholder="Enter your subject" minlength="2" maxlength="50" required>
                    </div>
                    <div>
                        <label class="text-danger" id="subject_alert"></label>
                    </div>
                </div>

                <div class="px-3">
                    <label class="fw-bolder" for="message">Message</label>
                </div>
                <div class="px-3 mt-1">
                    <textarea name="message" id="message" style="width: 100%;" rows="4"><?php echo (!isset($row)) ? '' : $row['message']; ?></textarea>
                </div>
                <div>
                    <label class="text-dander" id="message_alert"></label>
                </div>


                <div class="px-3">
                    <div>
                        <label class="fw-bolder" for="file">Upload File</label>
                    </div>
                    <div class="input-group mt-1">
                        <input type="hidden" class="form-control" name="exist_image" id="exist_image" value="<?php echo (!isset($row)) ? '' : $row['image']; ?>" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                        <?php echo (!isset($row)) ? '' : $row['image']; ?>
                    </div>
                    <div>
                        <label class="text-danger" id="file_alert"></label>
                    </div>
                </div>


                <div class="d-flex justify-content-center pb-3">

                    <!-- <div class="me-3">
                        <input type="submit" name="update" class="btn-primary mb-1 text-white" value="Update">
                        <a href="complaint_view.php?id=$row['id'] ?>" class="btn btn-dark mb-1 text-white" style="text-decoration: none;">View</a>
                    </div> -->
                    <div class="me-3">
                        <input type="submit" name="update" value="Update" class="btn-primary mb-1 text-white">
                    </div>
                    <div class="mb-5">
                        <a href="complaint_view.php" class="ms-2 text-dark fw-bolder">
                            View
                        </a>
                    </div>
                </div>

            </form>

        </div>
    </div>
</body>

</html>