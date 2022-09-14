const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}

//Agregar nuevas propiedades al objeto
producto.imgaen = 'imagen.jpg';

//Eliminar propiedades del objeto
delete producto.disponible;



console.log(producto);