<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once "database.php";

echo "<h3>Connected to Database Successfully</h3>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $full_name = trim($_POST["full_name"]);
    $roll_no = trim($_POST["roll_no"]);
    $email = trim($_POST["email"]);
    $department = trim($_POST["department"]);
    $year = trim($_POST["year"]);
    $phone = trim($_POST["phone"]);
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    if ($password != $confirm_password) {
        die("Passwords do not match.");
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO students
    (full_name, roll_no, email, password, department, year, phone)
    VALUES (?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Prepare Error: " . $conn->error);
    }

    $stmt->bind_param(
        "sssssss",
        $full_name,
        $roll_no,
        $email,
        $hashed_password,
        $department,
        $year,
        $phone
    );

    if ($stmt->execute()) {

        header("Location: ../frontend/login.html");
        exit();

    } else {

        die("Execute Error : " . $stmt->error);

    }

}
?>
