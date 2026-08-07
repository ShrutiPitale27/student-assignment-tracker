<?php

require_once "database.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $full_name = trim($_POST["full_name"]);
    $faculty_id = trim($_POST["faculty_id"]);
    $email = trim($_POST["email"]);
    $department = trim($_POST["department"]);
    $designation = trim($_POST["designation"]);
    $phone = trim($_POST["phone"]);
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    // Password Check
    if ($password != $confirm_password) {
        die("Passwords do not match.");
    }

    // Check Faculty ID
    $checkFaculty = $conn->prepare("SELECT teacher_id FROM teachers WHERE faculty_id = ?");
    $checkFaculty->bind_param("s", $faculty_id);
    $checkFaculty->execute();
    $checkFaculty->store_result();

    if ($checkFaculty->num_rows > 0) {
        die("Faculty ID already exists.");
    }

    // Check Email
    $checkEmail = $conn->prepare("SELECT teacher_id FROM teachers WHERE email = ?");
    $checkEmail->bind_param("s", $email);
    $checkEmail->execute();
    $checkEmail->store_result();

    if ($checkEmail->num_rows > 0) {
        die("Email already registered.");
    }

    // Hash Password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert Teacher
    $stmt = $conn->prepare("
        INSERT INTO teachers
        (full_name, faculty_id, email, password, department, designation, phone)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ");

    if (!$stmt) {
        die("Prepare Error: " . $conn->error);
    }

    $stmt->bind_param(
        "sssssss",
        $full_name,
        $faculty_id,
        $email,
        $hashed_password,
        $department,
        $designation,
        $phone
    );

    if ($stmt->execute()) {

        echo "<script>
                alert('Teacher Registration Successful!');
                window.location.href='../frontend/login.html';
              </script>";

    } else {

        die("Execute Error: " . $stmt->error);

    }

    $stmt->close();
    $checkFaculty->close();
    $checkEmail->close();
    $conn->close();
}
?>