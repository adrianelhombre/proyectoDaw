<?php

include './db/db.php'; 
include './db/funciones.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  inicioSesion();
}

// Comprueba si hay un mensaje de error en la sesión
if (isset($_SESSION['mensajeError'])) {
  $mensajeError = $_SESSION['mensajeError'];
  $tituloModal = $_SESSION['tituloModal'];
  unset($_SESSION['mensajeError']); 
  unset($_SESSION['tituloModal']); 
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
  </head>

  <body class="body-login">



      <main class="main-login">
        <img src="./assets/LOGO GRANDE.png" class="logo-grande" alt="Vite logo" />
        <h1>Inicio sesion</h1>

        <div class="card">
          <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
            <input class="input-general" id="email" type="text" name="user-name" placeholder="Nombre usuario" />
            <br>
            <input class="input-general" id="password" type="password" name="user-pass" placeholder="Contraseña" />
            <br>
            <input id="btn-form-enviar" class="btn-general btn-amarillo" type="submit" value="Iniciar">
          </form>
        </div>

        <p class="registro-aqui">
          Aun no tienes cuenta? Registrate <a href="registro.php">aqui</a>.
        </p>
      </main>
  </body>
</html>

