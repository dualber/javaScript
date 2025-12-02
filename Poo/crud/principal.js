import {Persona} from './persona.js';

const persona1 = new Persona('dualber',24,1.70);
let nombrePersona = document.getElementById('nombre');
let edadPersona = document.getElementById('edad');
let alturaPersona = document.getElementById('altura');

nombrePersona.innerText = persona1.nombre;
edadPersona.innerText = persona1.Edad;
alturaPersona.innerText = persona1.altura;

