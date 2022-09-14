
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar: function(){
        console.log(`Pausando...`)
    },
    borrar:  function(id){
        console.log(`Borrando cancion... ${id}`)
    },
    crearPL: function( nombreDePlaylist ){
        console.log(`Crando Playlist ${nombreDePlaylist}`)

        
    },
    reproducirPL: function( nombreDePlaylist ){
        console.log(`Reproducionedo Playlist ${nombreDePlaylist}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPL('Nuevo Album');
reproductor.reproducirPL( 'Nuevo Album' );

