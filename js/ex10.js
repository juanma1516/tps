let filas =parseInt(prompt ("ingrese un numero de filas"));
let columnas =parseInt(prompt ("ingrese un numero de columnas"));
//valor para cargar las celdas de la tabla
let total = filas * columnas;
document.write ("<table border>");
/*document.write("<tr>");
document.write("<td>prueba");
document.write("</td>");
document.write("</tr>");*/
for (let filaindex = 0; filaindex < filas; filaindex++) {
    document.write("<tr>");
    for (let indexcolumn = 0; indexcolumn < columnas; indexcolumn++) {
        document.write("<td>"+ total-- );
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write ("</table>");