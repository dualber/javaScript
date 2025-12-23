/* Instrucciones
Recorre el array productos.
Crea un nuevo array llamado productosDisponibles.
Guarda solo los productos con stock mayor a 0.
Calcula el valor total del inventario
(precio × stock de cada producto disponible).
Muestra:
El array productosDisponibles
El valor total del inventario
📌 Reglas
❌ No usar filter(), map() ni reduce().
❌ No modificar el array original.
✅ Usa for o for...of.
✅ El cálculo debe hacerse durante el recorrido.
✅ Devuelve los resultados de forma correcta.
*/

const productos = [
  { nombre: "Laptop", precio: 1200, stock: 4 },
  { nombre: "Mouse", precio: 25, stock: 20 },
  { nombre: "Teclado", precio: 45, stock: 0 },
  { nombre: "Monitor", precio: 300, stock: 7 },
  { nombre: "USB", precio: 15, stock: 50 }
];

const buscarProductos = ((productos) =>{
    let productosDisponibles = [];
    let valorTotal = 0;
    for(let producto of productos){
        if(producto.stock > 0){
            productosDisponibles.push(producto);
            valorTotal = valorTotal + (producto.stock * producto.precio)
        }
    }
      
    return {productosDisponibles, valorTotal};
});

resultado = buscarProductos(productos);



for (let r in resultado){
    console.log(r);
}
//console.log(resultado.valorTotal);