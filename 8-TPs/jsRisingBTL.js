/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
//variables
    var edad;
    var sexo;
    var sueldo;
    var ecivil;
    var legajo;
    var nacionalidad;
    var bandera = "Si";
    var sueldo1 = "1";
    //fin de variables
function ComenzarIngreso () 
{
for (var i = 0 ; i < 7 ; i ++)
{
    asignarDatos () 

var contador = 0
contador ++
if (contador == 7)
   {
    operacioneUno ()
    operacionDos ()
    operacionTres ()
    operacionCuatro ()
    operacionCinco ()
    operacionSeis ()
    operacionSiete ()
    operacionOcho ()
} 
} 
function asignarDatos ()
{
    pedirEdad ()
    pedirSexo ()
    pedirSueldo ()
    pedirEcivil ()
    pedirLegajo ()
    pedirNacionalidad ()

    
}
function pedirEdad ()
{
        edad = prompt ("Ingrese su edad porfavor");
        edad = parseInt (edad)
        while (edad <18 || edad >90 || isNaN (edad))
        {
            edad = prompt ("Ingrese denuevo su edad")
        }
}
function pedirSexo ()
{
        sexo = prompt ("Ingrese su sexo porfavor")        
        while (sexo != "m" && sexo != "f")
        {
            sexo = prompt ("Ingrese denuevo su sexo")
        }
}
function pedirSueldo ()
{
        prompt ("Ingrese su sueldo porfavor");
        sueldo = parseInt (sueldo)
        while (sueldo < 8000 || isNaN (sueldo))
        {
            sueldo = prompt ("Ingrese denuevo su sueldo")
        }
}
function pedirEcivil ()
{
        ecivil = prompt ("Ingrese su estado civil porfavor");
        ecivil = parseInt (ecivil)
        while (ecivil <1 || ecivil > 4 || isNaN (ecivil))
        {
            evicil = prompt ("Ingrese su estado civil denuevo")
        }
}
function pedirLegajo ()
{
        legajo = prompt ("Ingrese su legajo porfavor");
        legajo = parseInt (legajo)
        while (legajo < 0999 && legajo > 9999 || isNaN (legajo))
        {
            legajo = prompt ("Ingrese su legajo denuevo")
        }
}
function pedirNacionalidad ()
{
        nacionalidad = prompt ("Ingrese su nacionalidad porfavor");
        while (nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n")
        {
            nacionalidad = prompt ("Ingrese su nacionalidad denuevo")
        }
}      
function mostrarValores ()
{
        document.getElementById ("Edad").value = edad
        convertirSexo ()
        document.getElementById ("Sexo").value = sexo
        convertirEcivil ()
        document.getElementById ("EstadoCivil").value = ecivil
        document.getElementById ("Sueldo").value = sueldo
        document.getElementById ("Legajo").value = legajo
        convertirNacionalidad ()
        document.getElementById ("Nacionalidad").value = nacionalidad
}
function convertirEcivil ()
{
    switch (ecivil)
    {
        case "1" : ecivil = "Soltero"
        break;
        case "2" : ecivil ="Casado"
        break;
        case "3" : ecivil ="Divorciados"
        break;
        case "4" : ecivil ="viudos"
        break;
    }
}
function convertirSexo ()
{
    switch (sexo)
    {
        case "m" : sexo = "Masculino"
        break;
        case "f" : sexo = "Femenino"
        break;
    }
}
function convertirNacionalidad ()
{
    switch (nacionalidad)
    {
        case "a" : nacionalidad = "Argentino"
        break;
        case "e" : nacionalidad = "Extrajero"
        break;
        case "n" : nacionalidad = "Nacionalizados"
        break;
    }
}
function operacioneUno ()
{
    var sueldomaxn;
    var sueldominn;
    console.log (sueldo)
    if (nacionalidad == "n")
    {
    if (sueldo1 == "1")
    {
        sueldo1 = "2"
        sueldomaxn = sueldo
        sueldominn = sueldo
    }
    if (sueldomaxn < sueldo)
    {
        sueldomaxn = sueldo
    }
    if (sueldominn > sueldo)
    {
        sueldominn = sueldo
    }
    alert (" el sueldo maximo de los nacionalizados es " + sueldomaxn + " y el sueldo minimo " + sueldominn)
    }
    
} 
function operacionDos ()
{
    var sueldomaxF
    var sueldomaxFa
    if (sexo == "f" && nacionalidad == "a")
    {
        if (sueldo1 == "1")
        {
            sueldo1 == "2"
            sueldomaxF = sueldo
            sueldomaxFa = sueldo
        }
        if (sueldo > sueldomaxF)
        {
            sueldomaxF = sueldo
        }
        if (sueldomaxFa < sueldo)
        {
            sueldomaxFa = sueldo
        }
    }
}
function operacionTres ()
{

}
function operacionCuatro ()
{

}
function operacionCinco ()
{

}
function operacionSeis ()
{

}
function operacionSiete ()
{

}
function operacionOcho ()
{

}
}