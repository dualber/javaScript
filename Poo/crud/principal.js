import {Persona} from './persona.js';
let listPersonas = [
    {nombre:"andres",edad:25,altura:1.70},
    {nombre:"jota",edad:22,altura:1.80},
    {nombre:"miguel",edad:20,altura:1.76}
];

/*
const persona1 = new Persona('dualber',24,1.70);
let nombrePersona = document.getElementById('nombre');
let edadPersona = document.getElementById('edad');
let alturaPersona = document.getElementById('altura');

nombrePersona.innerText = persona1.nombre;
edadPersona.innerText = persona1.Edad;
alturaPersona.innerText = persona1.altura;
*/

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

