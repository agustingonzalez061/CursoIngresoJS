function Mostrar()
{
var repeticiones = prompt ("Ingrese un numero")
var contador = 0
for ( i = repeticiones ; i > 0 ; i --)
{
    if (repeticiones % i == 0)
    {
        console.log (i)
        contador ++ ;
    }
}


}//FIN DE LA FUNCIÓN