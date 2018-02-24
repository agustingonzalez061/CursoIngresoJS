function Mostrar()
{
    var contador = 0;
    var minimo;
    var maximo;
    var numero;
    var primera = true;
    while (true)
    {
        numero = prompt ("Ingrese los importes del mes")
        numero = parseInt (numero)
        if (isNaN (numero))
        {
            alert ("Solo numeros")
            continue
        }
        if (numero <= 0)
        {
            alert("el importe tiene que ser mayor a 0")
        }
        contador ++;
        if (primera)
        {
            primera = false;
            maximo = numero;
            minimo = numero;
        }
        else if (numero < minimo)
        {
            minimo = numero
        }
        else if (numero > maximo)
        {
            maximo = numero
        }
        if (contador == 24)
        {
            break;
        }
    }
    alert ("El importe maximo es " + maximo + " Y el importe minimo es " +  minimo)
}
