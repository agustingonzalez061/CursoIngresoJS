function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta;
	while (true)
	{
		respuesta = prompt ("ingrese un numero o para terminar toque cancelar")
		//pido numero
		if (respuesta == null)
		{
			break
		} //verifico si quiso salir o seguir
		respuesta = parseInt (respuesta);
		if (isNaN (respuesta))
		{
			alert ("vuelva a intentar con numeros")
			continue
		} // verifico que sea un numero
		acumulador += respuesta; //realizo la operacion
		contador ++;	
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN