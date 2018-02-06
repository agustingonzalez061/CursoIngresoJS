function Mostrar()
{
    var largo;
    var ancho;
    largo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    var resultado;
    resultado = (largo * 2 + ancho * 2) * 3;
    alert ("Se necesita " + resultado + " metros de alambre");

}
