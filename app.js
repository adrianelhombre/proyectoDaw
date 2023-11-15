import { loadExercises} from "./js/cargar-ejercicios.js";
import { loadTypes } from "./js/cargar-tipos.js";
import './js/modal-nuevo-ejercicio.js'
import './js/modal-ejercicio.js'
import './js/editar-ejercicio.js'
import './js/modal-editar-perfil.js'

const spanUser = document.getElementById("span-user");


document.addEventListener("DOMContentLoaded", () => {
    
    const grid = document.querySelector(".grid-fluid");
    
    loadExercises();
    loadTypes();
    
    document.addEventListener('updateExercises', () => {
        grid.innerHTML = "";
        loadExercises();
    })
    
    const userDataString = sessionStorage.getItem('user_data');
    console.log(userDataString);
    
    if (userDataString) {
        const userData = JSON.parse(userDataString);
        const userName = userData.user_name;
        spanUser.innerText = userName;
    }

});