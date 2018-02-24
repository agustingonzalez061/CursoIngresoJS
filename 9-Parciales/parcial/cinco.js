function Mostrar()
{
    var dia = prompt ("ingrese un dia de la semana")
    switch (dia) {
        case "sabado":
        case "domingo":
        alert("Es fin de semana")
            
            break;
    
        default:
        alert ("A trabajar")
            break;
    }
}
