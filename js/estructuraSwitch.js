let estacion = prompt("ingrese su estacion del año preferida: 1- verano, 2-primavera, 3-otoño, 4- invierno");
switch (estacion){
    case "1" : document.write("El usuario selecciono la estacion verano")
    break;
     /*va con comillas porque es cadena de texto*/
    case "2" : document.write("El usuario selecciono la estacion primavera")
    break;
    case "3" : document.write("El usuario selecciono la estacion otoño")
    break;
    case "4" : document.write("El usuario selecciono la estacion invierno")
    break;
    /*default es el caso que no este contemplado en los case*/
    default: document.write("El usuario selecciono una opcion erronea")
}