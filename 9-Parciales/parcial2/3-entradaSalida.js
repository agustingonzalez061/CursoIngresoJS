//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
    var ancho;
    largo = document.getElementById("largo").value;
    ancho = document.getElementById("ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    var resultado;
    resultado = (largo * 2 + ancho * 2) * 6;
    alert ("Se necesita " + resultado + " metros de alambre");
	
}

