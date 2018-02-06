function Mostrar()
{
    var importe;
    importe = prompt("Ingrese el importe.");
    importe = parseInt(importe);
    var iva;
    iva = importe *21 / 100;
    var resultado;
    resultado = parseInt(resultado);
    resultado = importe + iva;
    document.getElementById("importeFinal").value = resultado;

}
