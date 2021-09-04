/*1- Escribir un programa que solicite la edad y si es mayor de 18 años 
mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/
/*let num1 =(prompt("ingrese edad"));
if (num1 >=18){
    console.log ("el individuo puede conducir")
} else{
    console.log ("el individuo no puede conducir")
}
--------------------------------------------------------------------------------------------------------------------------
2- Escribir un programa que solicite una nota (número) de 0  a 10.
 Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente 

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
--------------------------------------------------------------------------------------------------------------------------
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” 
deben mostrarse todas las cadenas concatenadas con un guión -.
let resultado = "";
do{
    let palabra = prompt("ingrese una palabra");
    resultado = resultado+ palabra +"-";
    console.log (resultado);
    //while true o while false
}while(confirm("¿Desea continuar?"));
document.write (resultado);
--------------------------------------------------------------------------------------------------------------------------
4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let resultado = parseInt();
do{
    let n1 = parseInt(prompt("ingrese un valor"));
    resultado = resultado + n1;
    console.log (resultado);
}while (confirm (alert "Siga ingresando numeros" ));
document.write(resultado) 

5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».


let dni = prompt("ingrese dni");

if ( dni<0 || dni> 999999999){
    alert("ingrese un dni valido")
}else{
    switch (index=dni&23){
        case 1 : document.write("T")
        break;
        case 2 : document.write("R")
        break;
        case 3 : document.write("W")
        break;
        case 4 : document.write("A")
        break;
        case 5 : document.write("G")
        break;
        case 6  : document.write("M")
        break;
        case 7 : document.write("Y")
        break;
        case 8 : document.write("F")
        break;
        case 9 : document.write("P")
        break;
        case 10 : document.write("D")
        break;
        case 11 : document.write("X")
        break;
        case 12 : document.write("B")
        break;
        case 13 : document.write("N")
        break;
        case 14 : document.write("J")
        break;
        case 15 : document.write("Z")
        break;
        case 16 : document.write("S")
        break;
        case 17 : document.write("Q")
        break;
        case 18 : document.write("V")
        break;
        case 19 : document.write("H")
        break;
        case 20 : document.write("L")
        break;
        case 21 : document.write("C")
        break;
        case 22 : document.write("K")
        break;
        default: document.write("E");

}
}
--------------------------------------------------------------------------------------------------------------------------

6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….

for (let index = 1; index <=30; index++) {
   
    for (let reps = 1; reps < index+1; reps++){
    document.write  (index);  
   }
   document.write ("<br>");
    
    
}
--------------------------------------------------------------------------------------------------------------------------
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50) 
 de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

for (let index = 30; index >=1; index--) {
   
    for (let reps = 1; reps < index+1; reps++){
    document.write  (index);  
   }
   document.write ("<br>");
}
--------------------------------------------------------------------------------------------------------------------------


8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/


