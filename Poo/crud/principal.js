import {Persona} from './persona.js';

let listPersonas = [];

const personaForm = document.getElementById('personaForm');

//creamos el evento que guardará los datos de la persona al realizar el submit
Personaform.addEventListener('submit', function(event){
    event.preventDefault();
    //definimos las variables que entraran al objeto
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const altura = document.getElementById('altura').value;

    const persona1 = new Persona(nombre,edad,altura);

    listPersonas.push(persona1)
    //actualizamos la tabla 0
    cargarTabla();
    //limpiamos el formulario
    form.reset();
})

function cargarTabla(){
    const tbody = document.getElementById("tabla-personas");

    tbody.innerHTML = ""; //limpia contenido anterior
    listPersonas.forEach((persona, index) => {
        const fila = document.createElement('tr');
        const btn = document.createElement('button')

        fila.innerHTML =`
         <td>${persona.nombre}</td>
         <td>${persona.edad}</td>
         <td>${persona.altura}</td>
         <td>
            <button  onclick ='editarPersona(${index})'>Editar</button>
            <button  onclick ='eliminarPersona(${index})'>Eliminar</button>
         </td>
         `;
        
        tbody.appendChild(fila);
    });
}

 cargarTabla();

 window.eliminarPersona = function(index){
    listPersonas.splice(index, 1);
    cargarTabla();
}

 window.editarPersona = function(index){
    let nuevoNombre = prompt("nuevo nombre:", listPersonas[index].nombre);
    let nuevaEdad = prompt("nueva edad:", listPersonas[index].edad);

    if(nuevoNombre !== null && nuevaEdad !== null){
        listPersonas[index].nombre = nuevoNombre;
        listPersonas[index].edad = nuevaEdad;
        cargarTabla();
    }
}

