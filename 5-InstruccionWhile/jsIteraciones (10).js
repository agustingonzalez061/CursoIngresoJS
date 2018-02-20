function Mostrar()
{

	var contador=0;
	var contadorPositivo =0
	var contadorNegativo =0
	//declarar contadores y variables 
	var numero;
	var positivo = 0;
	var negativo = 0;
	var promedioP;
	var promedioN;
	var respuesta="si";
	var cero = 0;
	var diferencia;
	while(respuesta!="no")
	{
		numero = prompt ("ingrese un numero, para finalizar toque cancelar") //pido que ingrese un numero
		if (numero == null)
		{
			break
		} // le doy un fin al bucle
		numero = parseInt (numero) // convierto respuesta en numero
		if (isNaN (numero))
		{
			alert("ingrese un numero porfavor")
			continue
		} // verifico que sea un numero y no una letra
		if (numero > 0)
		{
			negativo += numero 
			contadorNegativo ++;
			promedioN = negativo % contadorNegativo
		} // operacion de negativos
		else if (numero < 0)
		{
			positivo += numero
			contadorPositivo ++;
			promedioP = positivo % contadorPositivo
		} //operacion de positivos
		else if (numero == 0)
		{
			contador ++;
		} // operacion de ceros
		diferencia = positivo - negativo;
	}

}//FIN DE LA FUNCIÓN