/*
instrucciones
Recorre el array pedidos.
Crea un objeto gastoPorCliente
Suma el total gastado por cada cliente.
Crea un nuevo array con esta estructura:
[
  { cliente: "Ana", totalGastado: 200 },
  { cliente: "Carlos", totalGastado: 120 },
  { cliente: "Beatriz", totalGastado: 200 }
]
📌 Reglas
❌ No usar reduce(), map(), filter().
❌ No modificar el array original.
✅ Usar for o for...of.
✅ Usar objetos como acumuladores.
✅ Crear un array final desde el objeto acumulador.
*/

const pedidos = [
  { cliente: "Ana", total: 120 },
  { cliente: "Carlos", total: 80 },
  { cliente: "Ana", total: 50 },
  { cliente: "Beatriz", total: 200 },
  { cliente: "Carlos", total: 40 },
  { cliente: "Ana", total: 30 },
];

const buscarPedidos = (pedidos) => {
  let gastosClientes = [];

  try {
    for (let pedido of pedidos) { 
      const gastosPorCliente = {
        cliente: pedido.cliente, //ana,carlos,ana,beatriz,carlos
        totalGastado: pedido.total,
      };
      if (gastosClientes.length === 0) {
        gastosClientes.push(gastosPorCliente);

      } else {
        let encontrado = false;
        for (let cliente of gastosClientes) { // ana, carlos,beatriz
            if (cliente.cliente === gastosPorCliente.cliente) {
                cliente.totalGastado += gastosPorCliente.totalGastado;
                encontrado = true;
            } 
        }

        if(!encontrado){ //2 > 1
             gastosClientes.push(gastosPorCliente);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
  return gastosClientes;
};

resultado = buscarPedidos(pedidos);

for (let r of resultado) {
  console.log(r);
}
