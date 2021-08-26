/*1- Escribir un programa que solicite la edad y si es mayor de 18 años 
mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/
/*let num1 =(prompt("ingrese edad"));
if (num1 >=18){
    console.log ("el individuo puede conducir")
} else{
    console.log ("el individuo no puede conducir")
}*/
/*2- Escribir un programa que solicite una nota (número) de 0  a 10.
 Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente */

let num1 =(prompt("ingrese nota"));
if (num1 >=0 && num1<=2){
    console.log ("Muy deficiente");
} else if( num1>=3 && num1<=4) {
    console.log ("Insuficiente");}
    else if ( num1>=5 && num1<=6)
{
    console.log ("Suficiente");
}
else if ( num1 == 7) {
    console.log ("Bien");
}
else if( num1>=8 && num1<=9) {
    console.log ("Notable");
}
else if (num1==10){ 
    console.log ("sobresaliente");
}
else (num1 <0 && num1 >10)
    console.log ("Numero Erroneo")
