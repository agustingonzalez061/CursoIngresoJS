//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base;
	base = document.getElementById("lado").value;
	base = parseInt(base);
	var perimentro;
	perimetro = base * 3;
	alert("El perimetro del triangulo es " + perimetro);
}

