let resultado = "";
do{
    let palabra = prompt("ingrese una palabra");
    resultado = resultado+ palabra +"-";
    console.log (resultado);
    //while true o while false
}while(confirm("¿Desea continuar?"));
document.write (resultado);
