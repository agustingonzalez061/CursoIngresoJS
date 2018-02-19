function Mostrar()
{
    var mes = prompt ("Ingrese un mes del año")
    switch (mes)
    {
        case ("Diciembre"):
        alert ("Se vienen las fiestas")
        break;
        case ("Enero"):
        alert ("Comienza el año")
        break;
        default:
        alert ("No es enero, ni Diciembre")
        break;
    }
}
