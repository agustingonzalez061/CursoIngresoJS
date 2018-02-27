//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var contador = 0;
	importe = parseInt (importe)
	var primera = "si";
	var importeMenor = 0;
	var importeMayor = 0;
	while (contador != 7)
	{
		importe = prompt ("ingrese el valor de cada dia");
		while (importe < 1)
	{
		importe = prompt ("El importe ingresado debe ser mayor a 0, vuelva a intentarlo")
	}
	contador ++;
	if (primera == "si")
	{
		primera = "no"
		importeMenor = importe
		importeMayor = importe
	}
	if (importeMayor < importe)
	{
		importeMayor = importe
	}
	else if (importeMenor > importe)
	{
		importeMenor = importe
	}
	}
	alert ("El importe mayor de la semana es " + importeMayor + " y el importe menor es " + importeMenor)
}