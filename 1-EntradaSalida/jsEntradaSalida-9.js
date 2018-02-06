/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var numero1;
    var numero2;
    numero1 = document.getElementById("sueldo").value;
    numero2 = document.getElementById("resultado").value;
    numero1 = parseInt(numero1); //convertimos "numero1" a numerica
    numero2 = parseInt(numero2); //convertimos "numero2" a numerica
    var resultado;
    resultado = 0.10;
    numero2 = numero1 * resultado;
    document.getElementById("resultado").value = numero2 + numero1;
   
}
