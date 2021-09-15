/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
Mostrar por pantalla en forma de lista los doce nombres del arreglo
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
for(let posicion=0 ; posicion<meses.length; posicion++){
    document.write('<br>' +meses[posicion])
}
2- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y
almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

 let town = [];

do{
     let addTown = prompt('Ingresar ciudad: ');
     town.push(addTown);
     console.log(town);
 } while(confirm('¿Ingresar mas ciudades?'));

 let count = town.length;

 document.write(`-------------------------------------------------------`);
 document.write(`<br>--|  La longitud del arreglo es de ${count}<br>`);
 document.write(`-------------------------------------------------------`);
 document.write(`<br>--|  En la primera posicion esta: ${town[0]}`);
 document.write(`<br>--|  En la tercera posicion esta: ${town[2]}`);
 document.write(`<br>--|  En la ultima posicion esta: ${town[(count)-1]}<br>`);
 document.write(`-------------------------------------------------------`);
 town.splice((count), 0, 'París');
 count = town.length;
 for(let i=0; i<count; i++){
     document.write(`<br>ciudad :${town[i]}`);
 }
 document.write(`<br>-------------------------------------------------------`);
 document.write(`<br>--|  En la segunda posicion esta: ${town[1]}`);
 document.write(`<br>-------------------------------------------------------`);
 town.splice(1, 1, 'Barcelona');
 for(let i=0; i<count; i++){
     document.write(`<br>ciudad :${town[i]}`);
 }