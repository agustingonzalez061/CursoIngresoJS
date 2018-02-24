function Mostrar()
{
    var numero1 = parseInt (numero1);
    var numero2 = parseInt (numero2);
    var resultado = parseInt (resultado);
    numero1 = prompt ("Ingrese su primer numero");
    numero2 = prompt ("Ingrese su segundo numero");
    if (numero1 == numero2)
    {
        resultado = numero1 * numero2
        document.write(resultado) 
    }
    if (numero1 > numero2)
    {
        resultado = numero1 - numero2
        document.write(resultado) 
    }
    else if (numero1 < numero2)
    {
        resultado = (numero1 + numero2)
        document.write (resultado)
    }
}
