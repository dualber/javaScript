/*
Recorre el array ventas.
Crea un objeto llamado resumenVentas.
El objeto debe tener esta estructura:

{
  Ana: 5,
  Carlos: 3,
  Beatriz: 2
}

*/

const ventas = [
  { cliente: "Ana", producto: "Laptop", cantidad: 1 },
  { cliente: "Carlos", producto: "Mouse", cantidad: 2 },
  { cliente: "Ana", producto: "Mouse", cantidad: 1 },
  { cliente: "Beatriz", producto: "Monitor", cantidad: 2 },
  { cliente: "Carlos", producto: "Laptop", cantidad: 1 },
  { cliente: "Ana", producto: "USB", cantidad: 3 },
];

const bucarVentas = (() => {
  let personasYventas = {};

  for (let venta of ventas) {
    if (personasYventas[venta.cliente]) {
      personasYventas[venta.cliente] += venta.cantidad;
    } else {
      personasYventas[venta.cliente] = venta.cantidad;
    }
  }
  return personasYventas;
});

console.log(bucarVentas(ventas));