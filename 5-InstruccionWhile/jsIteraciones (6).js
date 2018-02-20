function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	while (contador < 5)
	{
		numero = prompt ("ingrese 5 numeros")
		numero = parseInt (numero);
		contador ++;
		acumulador += numero; 
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN