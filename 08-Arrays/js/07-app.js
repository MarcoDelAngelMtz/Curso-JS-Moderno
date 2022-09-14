const carrito = [];

// Definir un producto

const producto = {
    nombre : 'Monitor 24 pulgadas',
    precio: 400
}

const producto2 = {
    nombre : 'Celular',
    precio: 800
}
const producto4 = {
    nombre : 'Celular2',
    precio: 100
}

// .push agrega al final de un arreglo


carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre : 'Teclado',
    precio : 50
}

carrito.unshift(producto3);

console.table(carrito);
// // Eliminar ultimo elemento del carrito
// carrito.pop();
// console.table(carrito);


// // Eliminar del inicio del carrito
// carrito.shift();

carrito.splice(3, 1);
console.table(carrito);