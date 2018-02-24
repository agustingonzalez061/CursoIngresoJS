function Mostrar()
{
    var numero
    for ( var i = 0 ; ; i ++ )
    {
        numero = prompt ("Por favor ingrese 9 para finalizar")
        while (isNaN (numero))
        {
            continue;
        }
        if  (numero == 9)
        {
            break;
        }
        console.log (i)
    }


}//FIN DE LA FUNCIÓN