function Mostrar()
{
    var nota
	var sexo
	var alumnos = 0;
	var promedio;
	var notaMin;
	var hombre6 = 0;
	var primera = "si"
	var notas = 0;
	while (alumnos != 100)
	{
		alumnos ++;
		nota = prompt ("ingrese la nota del alumno")
		nota = parseInt (nota)
		while (nota < 0 || nota > 10 || isNaN (nota))
		{
			nota = prompt ("La nota tiene que ser entre 0 y 10")
		}
		notas = notas + nota
		sexo = prompt ("Ingrese f para femenino o m para masculino")
		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt ("Ingrese f o m")
		}
		if (primera == "si")
		{
			primera = "no"
			notaMin = nota
		}
		if (notaMin > nota)
		{
			notaMin = nota
		}
		if (alumnos == 100)
		{
			promedio = notas / alumnos
		}
		if (nota >= 6 && sexo == "m")
		{
			hombre6 ++;
		}
	}
	alert ("El promedio de las notas totales es " + promedio)
	alert ("La nota mas baja es " + notaMin)
	alert ("La cantidad de varones con nota mayor a 6 es " + hombre6)	
}
