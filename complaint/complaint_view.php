<?php

require_once("db.php");

session_start();

$email = isset($_SESSION['valid']) ? $_SESSION['valid'] : null;

if ($email === null) {
    header("Location: login.php");
    exit();
}

$query = "SELECT * FROM complaint_form WHERE (email='$email')";
$result = mysqli_query($con, $query);


// if (!$result) {
//     die('Error: ' . mysqli_error($con));
// }

// require_once("db.php");
// $query = "select * from complaint_form";
// $result = mysqli_query($con, $query);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width scope=" col="device-width" scope="col" , initial-scale="1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <title>Complaint Records</title>
</head>

<body>
    <div class="row d-flex justify-content-center">
        <div class="text-center mb-4 mt-4">
            <h5>Complaint Records</h5>
        </div>

        <?php
        if ($result) {
        ?>

            <table class="table table-hover w-50" id="users">
                <tr class="table-dark">
                    <th scope="col">ID</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Message</th>
                    <th scope="col">Image</th>
                    <!-- <th scope="col">Edit</th> -->
                </tr>
                <?php
                foreach ($result as $row) {
                ?>
                    <tr>
                        <td><?php echo $row['id']; ?></td>
                        <td><?php echo $row['subject']; ?></td>
                        <td><?php echo $row['message']; ?></td>
                        <td><?php echo $row['image']; ?></td>
                        <!-- <td>
                            <a href="edit.php?id=<?php
                                                    // echo urlencode($row['id']) 
                                                    ?>" style="color: black;" class="btn btn-outline-light">
                                Edit
                            </a>
                        </td> -->
                    </tr>
            <?php
                }
            } else {
                echo "<tr><td colspan='5'>No complaints found</td></tr>";
            }
            ?>
            </table>
    </div>
</body>

</html>