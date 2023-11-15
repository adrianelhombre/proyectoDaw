export function loadUserProfile(userData) {
  const userName = userData.nombre;
  const userSurname = userData.apellido;
  const userEmail = userData.user_email;
  const userUsername = userData.user_name;

  // Actualizar elementos HTML con los datos del perfil
  document.getElementById("profile-name").innerText = userName;
  document.getElementById("profile-surname").innerText = userSurname;
  document.getElementById("profile-email").innerText = userEmail;
  document.getElementById("profile-username").innerText = userUsername;
}

export function showProfileModal() {
  // Mostrar la modal (puedes implementar la lógica aquí si es necesario)
  const modalPerfil = document.getElementById("modal-container-perfil");
  modalPerfil.style.display = "block";
}

export function handleUsernameEdit() {
  const buttonEditUsername = document.getElementById("btn-edit-username");
  const buttonOk = document.getElementById("btn-save-username");
  const buttonCancel = document.getElementById("btn-cancel-username");
  const usernameProfile = document.getElementById("profile-username");

  buttonEditUsername.style.display = "none";
  buttonOk.style.display = "flex";
  buttonCancel.style.display = "flex";

  usernameProfile.contentEditable = true;
  usernameProfile.focus();
  usernameProfile.classList.add("bg-gris");


  buttonOk.addEventListener("click", (e) => {
      // Lógica para guardar el nombre de usuario editado
      e.preventDefault();
      const userData = JSON.parse(sessionStorage.getItem('user_data'));
      const userId = userData.id_user;
      const newUsername = usernameProfile.innerText;

      // Enviar datos al servidor para actualizar el nombre de usuario
      fetch("./db/update-username.php", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: userId, username: newUsername }),
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error("La solicitud ha fallado");
          }
          return response.json();
      })
      .then((data) => {
          console.log(data);
          if (data.success) {
              alert("Usuario actualizado con éxito");
              window.location.href = "./main.php";
          }
      })
      .catch((error) => {
          console.error("Error al actualizar el nombre de usuario:", error);
      })
      .finally(() => {
          // Restaurar el estado original
          buttonEditUsername.style.display = "flex";
          buttonOk.style.display = "none";
          buttonCancel.style.display = "none";

          usernameProfile.contentEditable = false;
          usernameProfile.classList.remove("bg-gris");
      });
  });

  buttonCancel.addEventListener("click", (e) => {
    e.preventDefault();
    // Lógica para cancelar la edición del nombre de usuario
    buttonEditUsername.style.display = "flex";
    buttonOk.style.display = "none";
    buttonCancel.style.display = "none";

    usernameProfile.contentEditable = false;
    usernameProfile.classList.remove("bg-gris");
  });
}

export function handleDeleteProfile() {
  const userData = JSON.parse(sessionStorage.getItem('user_data'));
  const userId = userData.id_user;

  // Lógica para eliminar el perfil
  fetch("./db/delete-user.php", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userId }),
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error("La solicitud ha fallado");
      }
      return response.json();
  })
  .then((data) => {
      console.log(data);
      if (data.success) {
          alert("Usuario borrado con éxito");
          window.location.href = "./index.php";
      } else {
          alert("Error al borrar el usuario");
      }
  })
  .catch((error) => {
      console.error("Error al borrar el usuario:", error);
  });
}