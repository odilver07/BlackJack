<?php
    include("db.php");
    session_start();
    if(isset($_POST['login'])){
        $username = $_POST['username'];
        $pass = $_POST['pass'];

        $query = "select * from user where username = '$username' and pass = '$pass'";
        $result = mysqli_query($conn,$query);
        if(mysqli_fetch_assoc($result)){
            $_SESSION['username'] = $username;
            header("Location: index.php");
        }else{
            header("Location: login.php");
        };
}
?>