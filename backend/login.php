<?php

session_start();

require_once "database.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $role = $_POST["role"];
    $email = trim($_POST["email"]);
    $password = $_POST["password"];

    // ==========================
    // STUDENT LOGIN
    // ==========================
    if ($role == "student") {

        $stmt = $conn->prepare("SELECT student_id, full_name, password FROM students WHERE email = ?");

        $stmt->bind_param("s", $email);
        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows == 1) {

            $student = $result->fetch_assoc();

            if (password_verify($password, $student["password"])) {

                // Create Session
                $_SESSION["student_id"] = $student["student_id"];
                $_SESSION["student_name"] = $student["full_name"];

                // Redirect to Student Dashboard
                header("Location: ../pages/student_dashboard.php");
                exit();

            } else {

                echo "<script>
                        alert('Invalid Password!');
                        window.location.href='../frontend/login.html';
                      </script>";
                exit();

            }

        } else {

            echo "<script>
                    alert('Student Account Not Found!');
                    window.location.href='../frontend/login.html';
                  </script>";
            exit();

        }

        $stmt->close();
    }

    // ==========================
    // TEACHER LOGIN
    // ==========================
    elseif ($role == "teacher") {

        echo "<script>
                alert('Teacher Login will be implemented next.');
                window.location.href='../frontend/login.html';
              </script>";
        exit();

    }

} else {

    // Prevent direct access
    header("Location: ../frontend/login.html");
    exit();

}

$conn->close();

?>