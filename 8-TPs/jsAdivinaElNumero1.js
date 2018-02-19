/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
contadorIntentos = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
 numeroSecreto = Math.floor(Math.random()*(101-1)+1);
 console.log (numeroSecreto);
 contador = 0;
}

function verificar()
{
	var numero;
  numero = document.getElementById("numero").value;
  contadorIntentos= contadorIntentos +1;
  document.getElementById("intentos").value = contadorIntentos
  if (contadorIntentos >10)
  {
    alert("se termino el juego")
  }
  else if ((numero == numeroSecreto) && contadorIntentos== 1)
  {
    numeroSecreto = numeroSecreto + 1
    alert ("Te falto")
      if (numeroSecreto > 100 && contadorIntentos == 1)
  {
    numeroSecreto = numeroSecreto -2
    alert ("Te falto")
  }
  }
  else if (numero == numeroSecreto)
  {
    alert("Usted es un ganador y en solo "+ contadorIntentos +" intentos.")
  }
	else if (numero > numeroSecreto)
  {
    alert("Te pasaste")
  }
  else if (numero < numeroSecreto)
  {
    alert("Te falto")
  }
  
  
}