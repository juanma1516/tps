//funciones sin parametros
// function-nombre de la funcion- (parametros)
function aumentarPrecio(){
    let disney = 385;
    let inflacion = 150;
    document.write("valor total del servicio disney plus $" + (disney + inflacion));
};
//funcion con parametros
function actualizarPrecio(monto, producto, precio){
    let calcular = precio + monto ;
    document.write("<br>El producto:"+producto+" precio total $"+calcular);
}

//llamar a la funcion
aumentarPrecio();
let coeficienteInflacion = parseInt(prompt("ingrese el monto de inflacion del mes"));

actualizarPrecio(coeficienteInflacion, "Teclado Hyperx" , 9000);


