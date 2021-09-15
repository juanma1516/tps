//el parametro "serie" definido en la funcion solo funciona ahi, no tiene que ser igual que el objeto necesariamente
let mostrarObjeto =(serieParametro) =>{
    //obtener todas las claves de un objeto como un arreglo
    let claves = Object.keys(serieParametro);
    console.log(claves); //["nombres",...]
    
    for (let i = 0; i < claves.length; i++) {
        let propiedad = claves[i]
        //document.write(`<br> ${claves[i]}: ${serieParametro[clave[i]]}`);
        document.write('<br>' + propiedad +': ' +serieParametro[propiedad] );
        // serieParametro['nombre'] está adentro de la variable que ahora se llama propiedad
    }       
}
// crear un objeto con notacion literal -- se usa para uno o dos objetos
//  tiene propiedades y metodos
let serie = {
 //clave : valor
    nombre: "The office", 
    temporadas: 9,
    genero: "sitcom",
    capitulos: 27
}
// mostrar una propiedad de un objeto
document.write(`Serie: ${serie.nombre}`);
document.write(`<br> Capitulos: ${serie.capitulos}`);
//mostrar una propiedad de un objeto metodo 2
document.write(`<br> Tempradas: ${serie ["temporadas"]}`);
// modificar una propiedad de un objeto
serie.temporadas = 10;
document.write(`temporadas: ${serie.temporadas}`);
// agregar una nueva propiedad al objeto "objeto.nuevaprop"
serie.premios = true;
document.write(`<br>Premios: ${serie.premios}`);
//borrar propiedad de un objeto
delete serie.genero;
console.log(serie);
// llamar a la funcion
mostrarObjeto(serie);

