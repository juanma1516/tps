//las clases son para crear muchos objetos (onda usuarios)
// Es como un molde para crear objetos que van a tener la misma estructura
//Tratar de que sea siempre la primera mayuscula. sin ñ, sin espacios
class Serie {
    //la primer cosa es un metodo que se encarga de crear el objeto
    constructor(parametroNombre, parametroTemporadas, parametroCapitulos, ParametroGenero){
        // Crear las propiedades que va a tener ese objeto
        this.nombre = parametroNombre;
        this.temporadas = parametroTemporadas;
        this.genero = ParametroGenero;
        this.capitulos = parametroCapitulos;
        this.publicado = false; //queda asi por defecto porque sino necesitaria un parametro
        
    }
}