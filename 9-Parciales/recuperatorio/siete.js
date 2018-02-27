function Mostrar()
{
    var edad;
    var sexo;
    var personas = 0;
    var edadMin;
    var varones = 0;
    var acumulador = 0;
    var promedio;
    while (personas != 100)
    {
        edad = prompt ("Ingrese la edad de la persona")
        while (edad < 0 || edad > 100)
        {
            edad = prompt ("La edad debe ser entre 0 y 100")
        }
        edad = parseInt (edad)
        sexo = prompt ("Ingrese f para femenino o m para masculino")
        while (sexo != "f" && sexo != "m")
        {
            sexo = prompt ("Ingrese f o m")
        }
        personas ++;
        acumulador = parseInt (acumulador)
        acumulador = acumulador + edad 
        if (personas == 100)
        {
            promedio= acumulador / personas
        }
        else if (personas == 1)
        {
            edadMin = edad
        }
        if (edadMin > edad)
        {
            edadMin = edad
        }
        if (sexo == "m" && edad >= 20)
        {
            varones ++;
        }
    }
    alert ("El promedio de edad es " + promedio)
    alert ("La edad mas baja es de " + edadMin)
    alert ("La cantidad de hombres con 20 o mas años es de " + varones)
}
