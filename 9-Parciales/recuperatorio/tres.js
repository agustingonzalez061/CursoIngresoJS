function Mostrar()
{
    var precio1
    var precio2
    var precio3
    precio1 = document.getElementById("precioUno").value;
    precio2 = document.getElementById("precioDos").value;
    precio3 = document.getElementById("precioTres").value;
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    var suma;
    suma = precio1 + precio2 + precio3;
    var promedio;
    promedio = suma /3;
    alert("La suma es " + suma + " y el promedio es " + promedio + ".");
}
