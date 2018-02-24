function Mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");
repeticiones = parseInt (repeticiones)
while (isNaN (repeticiones))
{
    repeticiones = prompt("ingrese el número de repeticiones");
} 
for (var i = 0 ;i !=repeticiones; i ++)

{
    console.log ("hola utn fra"+ i)
}

}//FIN DE LA FUNCIÓN