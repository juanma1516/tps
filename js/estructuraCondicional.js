/*
if (condicion) {
    codigo a ejecutar si se cumple la condición
} 
*/
let num1 =parseInt(prompt("ingrese un primer numero"))
let num2 = parseInt(prompt("ingrese un segundo numero"))

if (num1>num2){
    document.write ("el primer numero ingresado es mayor que el segundo " + num1);
} else if(num1<num2) {
        document.write("el primer numero ingresado es mayor que el segundo " + num2);
    } else {
        document.write ("Los numeros son iguales" + num1);
    }
    


