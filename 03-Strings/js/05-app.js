const producto = 'Monitor 20 pulgadas ';

//.replace para remplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo de'));


//.slice para cortar
console.log(producto.slice(0, 10));
// console.log(producto.slice(8));
console.log(producto.slice(2, 1));

//.substring alternativa a .slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));


const usuario= 'Marco';
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));