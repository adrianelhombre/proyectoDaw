<?php
require_once("db.php");

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $exercises = array();
    $query = "SELECT * FROM ejercicios";
    $result = mysqli_query($conn, $query);

    while ($row = mysqli_fetch_assoc($result)) {
        if (!empty($row['img_ejercicio'])) {
        }
        $exercises[] = $row;
    }

    header("Content-Type: application/json");
    echo json_encode($exercises);
}
?>
