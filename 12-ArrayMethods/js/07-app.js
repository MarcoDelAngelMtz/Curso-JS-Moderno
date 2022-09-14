const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses4 = ['Octubre', 'Noviembre', 'Diciembre'];


// Concat
const meses3 = meses.concat(meses2, meses4, 'Otro mes');

console.log(meses3);

// Spread Operator

const resultado2 = [...meses, ...meses2, ...meses4, 'Otro mes'] ;
console.log(resultado2);