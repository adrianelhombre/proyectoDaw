import { loadExercises } from "./cargar-ejercicios.js";
import { loadTypesModal } from "./cargar-tipos-modal.js";
const modalEjercicio = document.getElementById("modal-container");
const buttonEdit = document.getElementById('btn-editar');
const buttonDelete = document.getElementById('btn-borrar');
const nombre = document.getElementById('nombre-ejercicio');
const duracion = document.getElementById('duracion-ejercicio');
const tipo = document.getElementById('tipo-ejercicio');
const descripcion = document.getElementById('descripcion-ejercicio');
const contenedorInfo = document.getElementById('info-ejercicio-grande');
const containerEditarImg = document.getElementById("container-editar-img");
const imagenInput = document.getElementById('img-modal-nueva');

// Event listener para editar y eliminar ejercicios.
buttonEdit.addEventListener("click", (e) => {
  const exerciseId = modalEjercicio.getAttribute("data-exercise-id");
  e.preventDefault();
    const tipoOriginal = tipo.textContent

    console.log(exerciseId);
    console.log(tipoOriginal);

    buttonEdit.style.display = 'none'; 
    buttonDelete.style.display = 'none';

    const buttonSubmit = document.createElement('button');
    buttonSubmit.classList.add('btn-general', 'btn-amarillo');
    buttonSubmit.textContent = 'Guardar';
    buttonSubmit.type = 'submit';
    containerEditarImg.style.display = 'flex';
    contenedorInfo.appendChild(buttonSubmit);
  
    const buttonCancel = document.createElement('button');
    buttonCancel.classList.add('btn-general', 'btn-amarillo');
    buttonCancel.textContent = 'Cancelar';
    contenedorInfo.appendChild(buttonCancel);
    
    containerEditarImg.style.display = 'flex';
    
    nombre.contentEditable = true;
    nombre.classList.add('bg-gris')
    duracion.contentEditable = true;
    duracion.classList.add('bg-gris')
    descripcion.contentEditable = true;
    descripcion.classList.add('bg-gris')
    loadTypesModal();
    


    buttonSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const tipoModal = document.getElementById('tipo-ejercicio-modal');

      const formData = new FormData();
      formData.append('id', exerciseId);
      formData.append('imagen', imagenInput.files[0]); 
      formData.append('nombre', nombre.textContent);
      formData.append('duracion', duracion.textContent);
      formData.append('tipo', tipoModal.value);
      formData.append('descripcion', descripcion.textContent);

      console.log('Datos del formulario:', formData);

      fetch("./db/update-exercise.php", {
          method: "POST",
          body: formData,
      })
      .then(response => {
          if (response.ok) {
              console.log('Actualización exitosa');
              loadExercises();
              resetModalEjercicio();
              imagenInput.value = "";
              tipo.textContent = tipoModal.value || tipoOriginal;
          } else {
              console.error('Error en la actualización');
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
    });



    buttonCancel.addEventListener('click', () => {
      resetModalEjercicio();
      tipo.textContent = tipoOriginal;
    });



    function resetModalEjercicio () {    
      const tipoModal = document.getElementById('tipo-ejercicio-modal');
      buttonEdit.style.display = 'block'; 
      buttonDelete.style.display = 'block';
      buttonSubmit.remove();
      buttonCancel.remove();
      nombre.contentEditable = false;
      nombre.classList.remove('bg-gris');
      duracion.contentEditable = false;
      duracion.classList.remove('bg-gris');
      descripcion.contentEditable = false;
      descripcion.classList.remove('bg-gris');
      buttonSubmit.remove();
      buttonCancel.remove();
      tipoModal.replaceWith(tipo)
      containerEditarImg.style.display = 'none';
      imagenInput.value = "";
    } 
});


buttonDelete.addEventListener('click', (e) => {
  e.preventDefault();
  const exerciseId = modalEjercicio.getAttribute("data-exercise-id");
      
      const formData = new FormData();
      formData.append('id', exerciseId);
      console.log('Datos del formulario:', formData);

      alert('¿Está seguro de eliminar este ejercicio?');

      fetch("./db/delete-exercise.php", {
          method: "POST",
          body: formData,
      })
      .then(response => {
          if (response.ok) {
              console.log('Ejercicio eliminado');
              loadExercises();
              modalEjercicio.style.display = "none";
              alert('Ejercicio eliminado');
          
          } else {
              console.error('Error en la actualización');
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
});