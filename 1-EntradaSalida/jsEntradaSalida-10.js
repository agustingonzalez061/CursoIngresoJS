/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var numero1;
    var numero2;
    numero1 = document.getElementById("importe").value;
    numero2 = document.getElementById("resultado").value;
    numero1 = parseInt(numero1); //convertimos "numero1" a numerica
    numero2 = parseInt(numero2); //convertimos "numero2" a numerica
    var resultado;
    resultado = numero1 * 25 / 100;
    numero2 = numero1 - resultado;
    document.getElementById("resultado").value = numero2;
}
