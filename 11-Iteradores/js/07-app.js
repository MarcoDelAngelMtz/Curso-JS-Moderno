const pendients = [ 'Tarea', 'Comer', 'Trabajar', 'Estudiar'];


const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

for ( let pendiente of pendients){
    console.log(pendiente);
}

for (let producto of carrito){
    console.log(producto.precio);
}