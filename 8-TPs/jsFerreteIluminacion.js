/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var lamparas;
    var marca;
    var precio;
    var descuento;
    var iibb;
    lamparas = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;
    lamparas = parseInt (lamparas);
    precio = lamparas * 35;
    if (lamparas >= 6)
    {
        descuento = precio / 2
        document.getElementById("precioDescuento").value = descuento
       
    }
    else if (lamparas == 5 && marca == "ArgentinaLuz")
    {
        descuento = (precio) - (precio * 0.40)
        document.getElementById("precioDescuento").value = descuento
    }
    else if (lamparas == 5)
    {
        descuento = (precio) - (precio * 0.30)
        document.getElementById("precioDescuento").value = descuento
    }
    else if (lamparas == 4 && marca == "ArgentinaLuz" )
    {
        descuento = (precio) - (precio * 0.25)
        document.getElementById("precioDescuento").value = descuento
    }
    else if (lamparas == 4 && marca == "FelipeLamparas")
    {
        descuento = (precio) - (precio * 0.25)
        document.getElementById("precioDescuento").value = descuento
    }
    else if (lamparas ==4)
    {
        descuento = (precio) - (precio * 0.20)
        document.getElementById("precioDescuento").value = descuento
    }
    else if (lamparas == 3 && marca == "ArgentinaLuz")
    {
        descuento = (precio) - (precio * 0.15)
        document.getElementById("precioDescuento").value = descuento
    }
    else if (lamparas == 3 && marca == "FelipeLamparas")
    {
        descuento = (precio) - (precio * 0.10)
        document.getElementById("precioDescuento").value = descuento
    }
    else if (lamparas ==3)
    {
        descuento = (precio) - (precio * 0.05)
        document.getElementById("precioDescuento").value = descuento
    }
    if (descuento <= 120)
    {
        iibb = descuento + (descuento * 0.10)
        alert ("Usted pago $" +  iibb + " de IIBB")
    }
}
