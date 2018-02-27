//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mesdelaño= prompt ("Ingrese un mes del año")
	switch (mesdelaño)
	{
		case "enero" :
		case "febrero" :
		alert ("Veranito!!!")
		break;
		case "marzo":
		case "abril":
		case "mayo":
		case "junio" :
		case "julio" :
		case "agosto" :
		case "septiembre" :
		case "octubre" :
		case "noviembre" :
		case "diciembre" :
		alert ("Extrañamos el verano !!")
		break;
		default:
		alert ("No es un mes del año")
		break;
	}
}

