'use strict'

window.addEventListener('load', function(){
    let formulario = document.querySelector("#formulario");
    let box_dashed = document.querySelector(".box_dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', () =>{
        console.log("evento submit capturado")
        let nombre = document.querySelector("#fname").value;
        let apellido = document.querySelector("#lname").value;
        let edad = parseInt(document.querySelector("#age").value);
        let datos_usuarios = [nombre,apellido,edad];

        if (nombre.trim() == null || nombre.trim().length == 0){
            alert("nombre no es valido")
            return false;
        }
        if (apellido.trim() == null || apellido.trim().length == 0){
            alert("apellido no es valido")
            return false;
        }
        if (edad == null || edad <= 0 || isNaN(edad)){
            alert("no es una edad valida ")
            return false;
        }
        let p_nombre = document.querySelector("#p_nombre span");
        let p_apellido = document.querySelector("#p_apellido span");
        let p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;
        /*
        for (const info in datos_usuarios) {
            let parrafo = document.createElement("p");
            parrafo.append(datos_usuarios[info]);
            box_dashed.append(parrafo);

        }*/
        box_dashed.style.display = "block";

    })
});