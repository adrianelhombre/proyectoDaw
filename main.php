<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>fballcoach web</title>
    <script type="module" src="app.js"></script>
  </head>
  
  <body class="body-general">
    <?php include("layout/header.php") ?>

    <main class="main-container">
      <h2 class="frase-mitica">Frase mitica</h2>

      <section class="grid-fluid" id="ejercicios">
        <!-- Aqui van los ejercicios -->
      </section>


    <?php include("layout/modal-ejercicio.php");
          include("layout/modal-perfil.php"); 
          include("layout/modal-nuevo-ejercicio.php")
          ?>

    <?php include("layout/button.php"); ?>

    </main>

  </body>
</html>