<?php
require_once("dbcontroller.php");
$db_handle = new DBController();

if (!empty($_POST["state_id"])) {
    $query = "SELECT * FROM city WHERE state_id = '" . $_POST["state_id"] . "' order by name asc";
    $result = $db_handle->runQuery($query);
?>
    <option value disabled selected>Select City</option>
    <?php
    foreach ($result as $city) {
    ?>
        <option value="<?php echo $city["id"]; ?>"><?php echo $city["name"]; ?></option>
<?php
    }
}
?>