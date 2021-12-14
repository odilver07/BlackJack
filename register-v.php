<?php
    include("db.php");
    if(isset($_POST['reg'])){
        $username = $_POST['username'];
        $pass = $_POST['pass'];

        $query = "insert into user(username,pass) values('$username','$pass')";
        $result =  mysqli_query($conn,$query);
        if(!$result){
            header("Location: login.php");
            die("query fail");
        }
        header("Location: index.php");
    }
?>