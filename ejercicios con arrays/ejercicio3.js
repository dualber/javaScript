/*
🎯 Instrucciones

Recorre el array edades.
Crea un nuevo array llamado edadesAdultos.
Guarda solo las edades mayores o iguales a 18.
Calcula la suma total de las edades guardadas.
Muestra por consola:
El array edadesAdultos
La suma total
📌 Reglas
❌ No usar filter(), reduce() ni map().
❌ No modificar el array original.
✅ Usa for o for...of.
✅ La suma debe hacerse durante el recorrido, no después.
*/
const edades = [12, 18, 25, 15, 30, 16, 40];

const buscarEdades = ((edades) =>{
const edadesAdultos = [];
let suma = 0;
for(let edad of edades){
    
    if(edad >=18){
        edadesAdultos.push(edad);
        suma+=edad;
    }
}

return (suma, edadesAdultos);

});

console.log(buscarEdades(edades));