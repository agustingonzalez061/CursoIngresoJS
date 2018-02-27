//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1 = prompt ("Ingrese su primer numero");
	numero1 =parseInt (numero1)
	var numero2 = prompt ("ingrese un segundo numero");
	numero2 = parseInt (numero2)
	var resultado;
	if (numero1 == numero2)
	{
		resultado = numero1 * numero2;
	}
	else if (numero1 > numero2)
	{
		resultado = numero1 - numero2
	}
	else if (numero1 < numero2)
	{
		resultado = (numero2 + numero1)
	}
	document.write ("El resultado es " + resultado)
}

