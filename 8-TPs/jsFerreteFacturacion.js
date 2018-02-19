/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var PrecioFinal;
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    precio1 = parseInt (precio1);
    precio2 = parseInt (precio2);
    precio3 = parseInt (precio3);
    PrecioFinal = precio1 + precio2 + precio3;
    alert ("El precio final es " + PrecioFinal);
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var PrecioFinal;
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    precio1 = parseInt (precio1);
    precio2 = parseInt (precio2);
    precio3 = parseInt (precio3);
    suma = precio1 + precio2 + precio3;
    PrecioFinal = suma/3;
    alert ("su promedio es " + PrecioFinal);
}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var iva1;
    var iva2;
    var iva3;
    var PrecioFinal;
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;
    precio1 = parseInt (precio1);
    precio2 = parseInt (precio2);
    precio3 = parseInt (precio3);
    iva1 = precio1 * 0.21 + precio1;
    iva2 = precio2 * 0.21 + precio2;
    iva3 = precio3 * 0.21 + precio3;
    alert ("Los precios finales son, precio uno =" + iva1 + ". Del precio dos =" + iva2 + ". Y del precio tres =" + iva3);
}