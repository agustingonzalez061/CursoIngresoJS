//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var contadorP = 0
	var contador = 0;
	var numeromax;
	var numeromin;
	var promedio;
	var numeros = 0;
	var primera = "si"
	var respuesta ="si"
	while (respuesta == "si")
	{
		numero = prompt ("Ingrese un numero porfavor")
		if (numero == null)
		{
			break;
		}
		numero = parseInt (numero)
		if (isNaN (numero))
		{
			alert ("Solo numeros")
		}
		while (numero <=0)
		{
			numero = prompt ("Solo numeros positivos")
		}
		contador ++;
		numeros = numeros + numero
		if (numero %2 == 0)
		{
			contadorP ++;
		}
		if (primera == "si")
		{
			primera = "no"
			numeromax = numero
			numeromin = numero
		}
		if (numeromax < numero)
		{
			numeromax = numero
		}
		if (numeromin > numero)
		{
			numeromin = numero
		}
		if (contador != 0 )
		{
			promedio = numeros / contador
		}
	}
	   document.write ("A) " + contadorP)
	   document.write ("B) " + promedio)
	   document.write ("C) " + numeros)
	   document.write ("D) " + numeromax + " Y " + numeromin)
}

