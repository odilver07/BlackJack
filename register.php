<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Document</title>
</head>
<body class="bg-success">
<nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-center fs-1" href="#">21 BlackJack</a>
            <span class="navbar-text">
                <a href="index.php"><img src="./assets/cartas/consola-de-juego.png" style="width:2.7em;"></a>
                <a href="login.php" class="btn btn-danger ms-2">Salir</a>
             </span>
        </div>
    </nav>
    <div class="container">
        <form method="POST" action="register-v.php" class="bg-white py-3 mt-3 border border-secondary">
            <div class="mb-3 my-auto mx-5">
                <label for="" class="form-label">Username</label>
                <input type="text" class="form-control" name="username">
            </div>
            <div class="mb-2 my-auto mx-5">
                <label for="" class="form-label">Password</label>
                <input type="text" class="form-control" name="pass">
            </div>
            <div class="mb-2 my-auto mx-5">
                <label for="" class="form-label">Repetir password</label>
                <input type="text" class="form-control" name="pass2">
            </div>
            <div class="d-grid gap-2 mb-2 my-auto mx-5">
                <button class="btn btn-outline-dark" name="reg" value="reg" id="reg">Crear</button>
            </div>
        </form>
    </div>
</body>
</html>