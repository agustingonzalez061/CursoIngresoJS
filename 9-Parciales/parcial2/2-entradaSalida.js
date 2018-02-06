//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	importe = prompt("Ingrese el precio");
	importe = parseInt(importe);
	var iva;
	iva = parseInt(iva);
	iva = importe * 0.21;
	var resultado;
	resultado = importe + iva;
	document.getElementById("importe").value = resultado;
	
}

