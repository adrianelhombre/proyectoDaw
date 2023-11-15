<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Inicio sesion</title>
    <script type="module" src="./js/login.js"></script>
  </head>

  <body class="body-login">
      <main class="main-login">
        <img src="./assets/LOGO GRANDE.png" class="logo-grande" alt="Vite logo" />
        <h1>Inicio sesion</h1>

        <div class="card">
          <form id="form-login" method="POST">
            <input class="input-general" id="user" type="text" name="user-name" placeholder="Nombre usuario" />
            <br>
            <input class="input-general" id="password" type="password" name="user-pass" placeholder="Contraseña" />
            <br>
            <input id="btn-form-enviar" class="btn-general btn-amarillo" type="submit" value="Iniciar">
          </form>
        </div>

        <?php include ("./layout/modal-error.php"); 
              include ("./layout/modal-registro.php"); 
              ?>


        <p class="registro-aqui">
          Aun no tienes cuenta? Registrate <button id="registro" class="btn-registro"=>aqui</button>.
        </p>
      </main>
  </body>
</html>

