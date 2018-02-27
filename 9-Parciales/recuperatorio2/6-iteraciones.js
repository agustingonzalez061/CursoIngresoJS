//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var importeMax
	var importeMin
	var contador = 0;
	var primera = "si"
	importe = parseInt (importe)
	while (contador !=7)
	{
		importe = prompt ("Ingrese el impote de cada dia de la semana")
		while (importe < 1)
		{
			importe = propmt ("El numero debe ser mayor a 0")
		}
		contador ++;
		if (primera == "si")
		{
			primera = "no"
			importeMax = importe
			importeMin = importe
		}
		if (importeMax < importe)
		{
			importeMax = importe
		}
		if (importeMin > importe)
		{
			importeMin = importe
		}
		
	}
	alert ("El importe maximo es " + importeMax + " y el importe minimo es " + importeMin)
}

