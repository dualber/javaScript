/* Instrucciones
Recorre el array nombres.
Crea un nuevo array llamado nombresConA.
Guarda solo los nombres que empiecen con la letra "A".
Muestra el resultado por consola.
📌 Reglas
❌ No modificar el array original.
❌ No usar filter() todavía.
❌ No usar expresiones regulares.
✅ Usa for, for...of o forEach.
✅ Puedes usar métodos de strings (charAt, startsWith, etc.).
*/

const nombres = ["Ana", "Carlos", "Beatriz", "Daniel", "Alberto"];

const buscarNombres = ((nombres)=>{

    const nombresConA = [];

    for(let nombre of nombres){
        if(nombre.charAt(0) === 'A' || nombre.charAt(0) === 'a'){
            nombresConA.push(nombre);
        }
    }
    return nombresConA;
});

console.log(buscarNombres(nombres));