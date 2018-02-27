//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mesdelaño = prompt ("Ingrese un mes del año")
	switch (mesdelaño)
	{
		case "enero" :
		case "febrero" : 
		alert ("Es veranito")
		break;
		case "marzo" :
		case "abril":
		case "mayo" :
		case "junio" :
		case "julio" :
		case "agosto" :
		case "octubre" :
		case "septiembre":
		case "noviembre" :
		case "diciembre" :
		alert ("extraño enero y febrero!!")
		break;
		default :
		alert ("Ese no es un mes del año")
		break;

	}	
}

