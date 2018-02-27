function Mostrar()
{
    var contador = 0;
    var numero;
    var suma = 0;
    var promedio;
    var pares = 0;
    var primero = true;
    var maximo;
    var minimo;
    var respuesta = "si"
    suma = parseInt (suma)
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
        if (primero == true)
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
            minimo = numero
        }
        if (numero %2 == 0)
        {
            pares ++;
        }
        if (contador != 0)
        {
            suma = suma + numero
        }
        if (contador != 0)
        {
            promedio = suma / contador
        }
    }
    document.write ("A) " + pares + " B) "+ promedio + " C) " + suma + " D) " + maximo + " y el minimo " + minimo)
}
