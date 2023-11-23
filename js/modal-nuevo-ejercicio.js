import { showMesaggeModal } from "./profile-functions.js";

const openModalButton = document.getElementById("btn-modal-new");
const closeModalButton = document.getElementById("close-modal-new");
const modalEjercicio = document.getElementById("modal-container-new");
const formulario = document.getElementById("add-exercise-form");
const containerBoton = document.getElementById("container-btn-ejercicio");

const defaultOption = document.createElement("option");


openModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    modalEjercicio.style.display = "block";
    containerBoton.style.display = "none";
});

closeModalButton.addEventListener("click", () => {
    modalEjercicio.style.display = "none";
    containerBoton.style.display = "flex";
    defaultOption.disabled = false;
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("./db/add-exercise.php", {
        method: "POST",
        body: new FormData(formulario),
    })
    .then(() => {
        showMesaggeModal("Ejercicio añadido con exito", true, document.getElementById("modal-container-new"))
        setTimeout(() => {
            formulario.reset();
            document.dispatchEvent(new Event("updateExercises"));
            modalEjercicio.style.display = "none";
            containerBoton.style.display = "flex";
        }, 2000);

    })
    .catch((error) => {
        console.error("Error al obtener datos del ejercicio:", error);
    });
    
});

