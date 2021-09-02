let anime = "DBZ";


//arreglo
let series = ["Dragon Ball","Naruto", "Evangelion", anime, 15, true];
 // crear un arreglo vacio
 let temporadas = [];
//Acceder a un elemento del arreglo
document.write("Serie: " + series[1]);
console.log ("Serie: " + series[1]);
//agregar un elemento al arreglo
series.push(prompt("ingrese una serie"));
console.log(series.length);
console.log(series);
//mostrar los elementos de un arreglo
for(let posicion=0 ;posicion < series.length; posicion++){
    document.write("<br>Serie: " + series[posicion])
}
document.write ("<br>");
series[4] = "The office";
for(let posicion=0 ;posicion < series.length; posicion++){
    document.write("<br>Serie: " + series[posicion])
}
//agregar un elemento particular
//el segundo valro del splice dice "cuantos queres borrar"
//el primero la posicion
//tercero cuantos o cual queres agregar
series.splice(0,0, "one piece" );
document.write ("<br>");
for(let posicion=0 ;posicion < series.length; posicion++){
    document.write("<br>Serie: " + series[posicion])
}

series.splice(3,0,"Sword art online");
document.write ("<br>");
for(let posicion=0 ;posicion < series.length; posicion++){
    document.write("<br>Serie: " + series[posicion])
}
// Eliminar elementos de un arreglo
//Desde la posicion 7, borro un elemento y agrego 0
series.splice(7,1);
document.write ("<br>");
for(let posicion=0 ;posicion < series.length; posicion++){
    document.write("<br>Serie: " + series[posicion])
}
//eliminar todos desde una posicion
series.splice(3); //borra todo desde la posicion 3

