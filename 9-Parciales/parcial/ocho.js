function Mostrar()
{
    var contador = 0;
    var numero;
    var suma;
    var promedio;
    var pares = 0;
    var primero = true;
    var maximo;
    var minimo;
    var respuesta = "si"

    while (respuesta == "si")
    {
        numero = prompt ("Ingrese un numero y cancelar para terminar")
        if (numero == null)
        {
            break
        }
        numero = parseInt (numero)
        if (isNaN (numero))
        {
            alert ("solo numeros")
            continue;
        }
        contador ++;
        if (primera == true)
        {
            primera = false
            maximo = numero
            minimo = numero
        }
        else if (maximo > numero)
        {
            maximo = numero
        }
        else if (minimo < numero)
        {
            minimo = maximo
        }
        if (numero %2 == 0)
        {
            pares ++;
        }
        if (contador != 0)
        {
            promedio = numero % contador
        }
            suma += numero

    }
    document.write ("A) " + pares + " B) "+ promedio + " C) " + suma + " D) " + maximo + minimo)
}
