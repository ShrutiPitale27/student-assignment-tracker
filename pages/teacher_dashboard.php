<?php

session_start();

if (!isset($_SESSION["teacher_id"])) {

    header("Location: ../frontend/login.html");
    exit();

}

?>

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Teacher Dashboard</title>

<style>

body{
    font-family:Poppins,sans-serif;
    background:#f4f7fc;
    margin:0;
}

header{
    background:#2563eb;
    color:white;
    padding:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.container{
    width:90%;
    margin:40px auto;
}

.card{
    background:white;
    padding:30px;
    border-radius:10px;
    box-shadow:0 5px 10px rgba(0,0,0,.1);
}

a{
    color:white;
    text-decoration:none;
}

</style>

</head>

<body>

<header>

<h2>

Welcome,
<?php echo htmlspecialchars($_SESSION["teacher_name"]); ?> 👋

</h2>

<a href="../backend/logout.php">

Logout

</a>

</header>

<div class="container">

<div class="card">

<h2>Teacher Dashboard</h2>

<p>Teacher Login Successful 🎉</p>

</div>

</div>

</body>

</html>