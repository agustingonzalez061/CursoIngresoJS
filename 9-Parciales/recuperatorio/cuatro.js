function Mostrar()
{
    var primero = prompt ("ingrese su primer numero")
    var segundo = prompt ("ingrese su segundo numero")
    var suma;
    parseInt (primero)
    parseInt (segundo)
    parseInt (suma)
    suma = primero + segundo
    if (suma >0)
    {
        document.write ("Su numero es positivo")
    }
    else if (suma == 0)
    {
        document.write ("su numero es igual a 0")
    }
    else if (suma <0)
    {
        document.write ("su numero es negativo")
    }
}
