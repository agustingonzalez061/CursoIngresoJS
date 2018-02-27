function Mostrar()
{
    var contenedores;
    var contador = 0;
    var primera = "si";
    var pesomax;
    var pesomin;
    while (contador != 50)
    {
        contenedores = prompt ("Ingrese el peso del contenedor")
        parseInt (contenedores)
        while (contenedores < 0)
        {
            contenedores = prompt ("El peso debe ser mayor a 0")
        }
        contador ++;
        if (primera == "si")
        {
            primera = "no"
            pesomax = contenedores
            pesomin = contenedores
        }
        else if (contenedores < pesomin)
        {
            pesomin = contenedores
        }
        if (contenedores > pesomax)
        {
            pesomax = contenedores
        }
        }

    alert ("El mas pesado fue el de " + pesomax + "KG ,  y el menos pesado fue de " + pesomin + "KG")
}
