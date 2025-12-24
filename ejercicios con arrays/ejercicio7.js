/**Instrucciones
Recorre el array estudiantes.
Para cada estudiante:
Calcula el promedio de sus notas.
Determina el estado:
promedio >= 3 → "Aprobado"
promedio < 3 → "Reprobado"
Crea un nuevo array llamado resultadoFinal.
Cada elemento del array debe tener esta estructura:
{
  nombre: "Ana",
  promedio: 4.17,
  estado: "Aprobado"
}
  Reglas (importantes)
❌ No usar map(), reduce() ni filter().
❌ No modificar el array original.
✅ Usar for o for...of.
✅ El promedio debe redondearse a 2 decimales.
✅ El cálculo del promedio debe hacerse manualmente.
 */

const estudiantes = [
  { nombre: "Ana", notas: [4, 3.5, 5] },
  { nombre: "Carlos", notas: [2, 3, 2.5] },
  { nombre: "Beatriz", notas: [5, 4.5, 4] },
  { nombre: "Daniel", notas: [3, 3, 3] }
];

const buscarNotas = ((estudiantes) => {
  
  const resultadoFinal = [];
  for (let estudiante of estudiantes) {

    let promedio = promedioNotas(estudiante.notas);
    //formas de realizar los objetos

    //forma 1 
  /*
    const estudiantesYnotas = {};
    
    estudiantesYnotas['nombre'] = estudiante.nombre;
    estudiantesYnotas["promedio"] = Number(promedio.toFixed(2)); // .toFixed crea un string por lo tanto hay que ponerlo dentro de la funcion Number
    estudiantesYnotas['estado'] = (promedio >= 3) ? 'Aprobado' : 'Reprobado';
    resultadoFinal.push(estudiantesYnotas);
    }
  */
  
  //forma 2
    const estudiantesYnotas = {
      "nombre":estudiante.nombre,
      "promedio":Number(promedio.toFixed(2)),
      "estado": promedio >=3 ? "Aprobado":"Reprobado"
    }
    resultadoFinal.push(estudiantesYnotas);
  }
  return resultadoFinal;
});

const promedioNotas = ((notas) => {
  let suma = 0;
  for (let nota of notas) {
    suma += nota;
  }
  return suma / notas.length;
})

resultado = buscarNotas(estudiantes);
for(let estudiante of resultado){
  console.log(estudiante);
}


