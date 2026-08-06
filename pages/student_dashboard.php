<?php

session_start();

if (!isset($_SESSION["student_id"])) {

    header("Location: ../frontend/login.html");
    exit();

}

?>

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Student Dashboard</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Poppins,sans-serif;
}

body{
    background:#f4f7fc;
}

header{
    background:#2563eb;
    color:white;
    padding:20px 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.container{
    width:90%;
    margin:40px auto;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.card{
    background:white;
    padding:30px;
    border-radius:12px;
    text-align:center;
    box-shadow:0 5px 12px rgba(0,0,0,.1);
    transition:.3s;
}

.card:hover{
    transform:translateY(-5px);
}

.card h2{
    margin-bottom:15px;
}

.card a{
    text-decoration:none;
    color:#2563eb;
    font-weight:600;
}

.logout{

    color:white;
    text-decoration:none;

}

</style>

</head>

<body>

<header>

<h2>

Welcome,
<?php echo htmlspecialchars($_SESSION["student_name"]); ?> 👋

</h2>

<a class="logout" href="../backend/logout.php">

Logout

</a>

</header>

<div class="container">

<div class="cards">

<div class="card">

<h2>📚</h2>

<h3>Assignments</h3>

<a href="#">Open</a>

</div>

<div class="card">

<h2>👥</h2>

<h3>Groups</h3>

<a href="#">Open</a>

</div>

<div class="card">

<h2>🔔</h2>

<h3>Notifications</h3>

<a href="#">Open</a>

</div>

<div class="card">

<h2>👤</h2>

<h3>Profile</h3>

<a href="#">Open</a>

</div>

</div>

</div>

</body>

</html>