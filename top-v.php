<?php
    include("db.php");
    if(isset($_GET['score'])){
        $score2 = $_GET['score'];

        if($score2){
            session_start();
            $username = $_SESSION['username'];
            $query = "update user set score =  case when '$score2' > score then '$score2' else score end where username = '$username'";
            $result = mysqli_query($conn,$query);
            header("Location: index.php");
        }
    }
?>