/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var grados;
    var resultado;
    grados = document.getElementById("Temperatura").value;
    grados = parseInt (grados);
    resultado = 100/(212-32) * (grados - 32);
    alert (grados + " Fahrenheit, son " + resultado + " grados centigrados");
}

function CentigradosFahrenheit () 
{
    var grados;
    var resultado;
    grados = document.getElementById("Temperatura").value;
    grados = parseInt (grados);
    resultado = (212-32)/100 * grados + 32;
    alert (grados + " Centigrados, son " + resultado + " grados Fahrenheit");
}
