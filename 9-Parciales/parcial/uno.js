
function Mostrar()
{
    var dato;
    dato = document.getElementById("laBase").value;
    dato = parseInt(dato);// pasamos "dato" a numerico
    var perimetro;
    perimetro = dato + dato + dato + dato;
    alert(perimetro);
}
