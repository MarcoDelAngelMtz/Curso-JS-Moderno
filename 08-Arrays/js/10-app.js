const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

const nuevoArreglo = carrito.map( function( producto ){
    return(`${producto.nombre} - Precio: ${producto.nombre}`);
} )

const nuevoArreglo2 = carrito.forEach( function( producto ){
    return(`${producto.nombre} - Precio: ${producto.nombre}`);
} )

console.log(nuevoArreglo);
console.log(nuevoArreglo2);