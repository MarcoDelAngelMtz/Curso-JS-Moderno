
const reproductor = {
    cancion: '',
    reproducir: id =>  console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar:  id => console.log(`Borrando cancion... ${id}`),
    crearPL: nombreDePlaylist => console.log(`Crando Playlist ${nombreDePlaylist}`),
    reproducirPL: nombreDePlaylist => console.log(`Reproducionedo Playlist ${nombreDePlaylist}`),
    
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo nueva cancion`);

    },

    get ObtenerCancion() {
      console.log(`${this.cancion}`);  
    }
}
reproductor.nuevaCancion = 'Enter Sandman';
reproductor.ObtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPL('Nuevo Album');
reproductor.reproducirPL( 'Nuevo Album' );