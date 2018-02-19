function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "f" && sexo != "m" && sexo != null)
{
    sexo = prompt ("No es ni femenino ni masculino, ingrese nuevamente su sexo")
}
if (sexo = "f")
{
document.getElementById('Sexo').value="Femenino";
}
if (sexo = "m")
{
document.getElementById('Sexo').value="Masculino";
}
}//FIN DE LA FUNCIÓN