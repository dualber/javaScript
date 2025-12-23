/*
Instrucciones

Recorre el array numeros. Crea un nuevo array llamado numerosMayores.

En numerosMayores guarda solo los números mayores a 6. Muestra el resultado por consola.

📌 Reglas

❌ No puedes modificar el array original.

❌ No usar filter() todavía (lo veremos después).

✅ Usa for o for...of.

*/

const numeros = [5, 8, 12, 3, 7, 20, 1];

 const buscarMayores = ((numeros) => {
    const numerosMayores = []
    for(let numero of numeros){
        if (numero > 6){
            numerosMayores.push(numero)
        }
    }

    return numerosMayores;
});
