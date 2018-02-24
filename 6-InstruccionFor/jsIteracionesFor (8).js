function Mostrar()
{var numero = prompt ("Ingrese un numero")
var contador = 0
var respuesta = "es primo"
for ( i = 2; i < numero ; i ++)
{
    if (numero % i == 0)
    {
       respuesta = "no es primo"
       break;
    }
}
alert (respuesta)
}//FIN DE LA FUNCIÓN