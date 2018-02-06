//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	importe = prompt("ingrese el valor del producto");
	importe = parseInt(importe);
	var iva;
	iva = parseInt(iva);
	iva = importe * 21 /100;
	var resultado;
	resultado = parseInt(resultado);
	resultado = importe + iva;
	document.getElementById("importe").value = resultado;


	
}

