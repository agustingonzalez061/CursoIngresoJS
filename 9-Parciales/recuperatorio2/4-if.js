//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var primero = prompt ("Ingrese su primer numero");
	var segundo = prompt ("Ingrese su segundo numero");
	primero = parseInt (primero);
	segundo = parseInt (segundo);
	var resultado;
	if (primero == segundo)
	{
		resultado = primero * segundo
	}
	else if (primero > segundo)
	{
		resultado = primero - segundo
	}
	else if (segundo > primero)
	{
		resultado = segundo + primero
	}
	document.write ("El resultado es " + resultado)
}

