const closeModalButton = document.getElementById("close-modal");
const modalEjercicio = document.getElementById("modal-container");
const nombreEjercicio = document.getElementById("nombre-ejercicio");
const imagenEjercicio = document.getElementById("img-ejercicio");
const tipoEjercicio = document.getElementById("tipo-ejercicio");
const duracionEjercicio = document.getElementById("duracion-ejercicio");
const descripcionEjercicio = document.getElementById("descripcion-ejercicio");
const containerBoton = document.getElementById("container-btn-ejercicio");


closeModalButton.addEventListener("click", () => {
    modalEjercicio.style.display = "none";
    containerBoton.style.display = "flex";
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-modal")) {
        const exerciseId = e.target.getAttribute("data-exercise-id");
        fetch(`./db/show-exercise.php?id=${exerciseId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("La solicitud ha fallado");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                nombreEjercicio.textContent = data.nombre_ejercicio;
                imagenEjercicio.src = data.img_ejercicio;
                tipoEjercicio.textContent = data.tipo_ejercicio;
                duracionEjercicio.textContent = data.duracion;
                descripcionEjercicio.textContent = data.descripcion;
                modalEjercicio.style.display = "block";
                containerBoton.style.display = "none";
                modalEjercicio.setAttribute("data-exercise-id", data.id_ejercicio);
            })
            .catch((error) => {
                console.error("Error al obtener datos del ejercicio:", error);
            });
    }
});
