//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base
	base = document.getElementById("lado").value;
	base = parseInt(base);
	var perimetro
	perimetro = base + base + base;
	alert("El perimetro es " + perimetro);
	
}

