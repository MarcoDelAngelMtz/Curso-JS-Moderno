iniciarApp();

function iniciarApp(){
    console.log('Iniciando App...')

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');

    usuarioAunteticado('Pablo');
}

function usuarioAunteticado ( Usuario ){
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${Usuario}`);
}