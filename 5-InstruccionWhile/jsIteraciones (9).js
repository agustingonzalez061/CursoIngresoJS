function Mostrar()
{
	var contador=0;
	// declarar variables	
	var respuesta = 'si';
	var minimo;
	var maximo;
	var numero;
	var primera = true
	while(respuesta == 'si')
	{
		numero = prompt ("ingrese un numero o para finalizar toque cancelar")
		if (numero == null)
		{
			break
		}
		numero = parseInt (numero)
		if (isNaN (numero))
		{
			alert ("Solo con numeros porfavor")
			continue
		}
		contador ++;
		if (primera)
		{
			primera = false; // hago cambio de bandera para que no vuelva a entrar a este if y no le de mas de un valor a min y max
			maximo = numero;
			minimo = numero;
		} // le doy a maximo y minimo un valor 
		else if (numero > maximo)
		{
			maximo = numero
		} // realizo la operacion del maximo
		else if (numero < minimo)
		{
			minimo = numero
		} // realizo la operacion del minimo
	}
	document.getElementById("maximo").value= maximo;
	document.getElementById("minimo").value= minimo;
}//FIN DE LA FUNCIÓN