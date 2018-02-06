function Mostrar()
{
    var producto;
    producto = prompt("Ingrese valor del producto");
    producto = parseInt(producto);
    var resultado;
    resultado = parseInt(resultado);
    resultado = producto * 25 / 100;
    var importe;
    importe = parseInt (importe);
    importe = producto - resultado;
    document.getElementById("importeFinal").value = importe;
}
