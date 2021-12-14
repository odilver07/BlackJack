<?php
    session_start();
    $username = $_SESSION['username'];
    if(!$username){
        header("Location: login.php");
        die("query fail");
    }
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlackJack</title>
    <link rel="stylesheet" href="assets/css/styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
</head>
<body class="bg-success">
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-center fs-1" href="#">21 BlackJack</a>
            <span class="navbar-text">
                <a href="donaciones.html"><img src="./assets/cartas/help.png" style="width:2.7em;"></a>
                <a href="top.php"><img src="./assets/cartas/award.png" style="width:2.7em;"></a>
                <a href="login.php" class="btn btn-danger ms-2">Salir</a>
             </span>
        </div>
    </nav>
    <h2>Jugador: <b><span id="score-player">0</span> - <span>0</span></b>:Computer</h2>
    <div class="row container">
        <div class="col">
            <h1>Jugador 1 - <small>0</small></h1>
            <div id="jugador-cartas">
                <!-- <img class="carta" src="assets/cartas/10S.png" alt="carta/baraja"> -->
                <!-- <img class="carta" src="assets/cartas/10S.png" alt="carta/baraja">
                <img class="carta" src="assets/cartas/10S.png" alt="carta/baraja">
                <img class="carta" src="assets/cartas/10S.png" alt="carta/baraja"> -->

            </div>
        </div>
    </div>

    <div class="row container">
        <div class="col">
            <h1>Computadora - <small>0</small></h1>
            <div id="computadora-cartas">
                <!-- <img class="carta" src="assets/cartas/8S.png" alt="carta/baraja"> -->
                <!-- <img class="carta" src="assets/cartas/8S.png" alt="carta/baraja">
                <img class="carta" src="assets/cartas/9S.png" alt="carta/baraja">
                <img class="carta" src="assets/cartas/10S.png" alt="carta/baraja"> -->

            </div>
        </div>
    </div>
    <div class="row botones-player">
        <div class="col text-center">
            <button id="btnNuevo" class="btn btn-danger">Nuevo juego</button>
            <button id="btnPedir" class="btn btn-primary">Pedir carta</button>
            <button id="btnDetener" class="btn btn-primary">Detener</button>
        </div>
    </div>
    <script src="assets/js/juego.js"></script>
</body>
</html>
