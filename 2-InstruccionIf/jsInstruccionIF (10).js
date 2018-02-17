function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota
	nota = Math.floor((Math.random ()*(11-0) ))
	if(nota >=9)
	{
		alert(nota + "Excelente")
	}
	else if (nota >=7)
	{
		alert(nota + "Muy bien")
	}
	else if (nota >=4)
	{
		alert(nota + "Bien")
	}
	else if (nota >=2)
	{
		alert(nota + " Mal")
	}
	else if (nota >=0)
	{
		alert(nota + "Pésimo")
	}
}//FIN DE LA FUNCIÓN