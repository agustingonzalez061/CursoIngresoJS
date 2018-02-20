function Mostrar()
{
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta="si";
	while (respuesta != "no")
	{
		respuesta = prompt ("ingrese un numero, para finalizar toque cancelar") //pido que ingrese un numero
		if (respuesta == null)
		{
			break
		} // le doy un fin al bucle
		respuesta = parseInt (respuesta) // convierto respuesta en numero
		if (isNaN (respuesta))
		{
			alert("ingrese un numero porfavor")
			continue
		} // verifico que sea un numero y no una letra
		else if (respuesta > 0)
		{
			positivo += respuesta
		} // realizo la operacion de los positivos
		else if (respuesta < 0)
		{
			if (respuesta !=0)
			{
				negativo *= respuesta
			}
			if (respuesta == 0)
			{
				contador --;
			}
		} // realizo la operacion de los negativos
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN