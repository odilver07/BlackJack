<?php
    session_start();
    $username = $_SESSION['username'];
    if(!$username){
        header("Location: login.php");
        die("query fail");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
</head>
<body class="bg-success">
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-center fs-1" href="index">21 BlackJack</a>
            <span class="navbar-text">
                <a href="donaciones.html"><img src="./assets/cartas/help.png" style="width:2.7em;"></a>
                <a href="index.php"><img src="./assets/cartas/consola-de-juego.png" style="width:2.7em;"></a>
                <a href="login.php" class="btn btn-danger ms-2">Salir</a>
             </span>
        </div>
    </nav>
    <div class="container">
    <table class="table table-dark mt-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
  <?php
    include("db.php");
    $query = "select * from user order by score desc";
    $usuarios = mysqli_query($conn,$query);
    while($row = mysqli_fetch_array($usuarios)){ ?>
    <tr>
      <td> <?php echo $row['id'] ?></td>
      <td> <?php echo $row['username'] ?></td>
      <td> <?php echo $row['score'] ?></td>
    </tr>         
  <?php } ?>
  </tbody>
</table>
    </div>
</body>
</html>