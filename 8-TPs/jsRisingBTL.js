/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
//variables
    var edad;
    var sexo;
    var sueldo;
    var ecivil;
    var legajo;
    var nacionalidad;
    var contador = 0;
    var sueldomaxna = 0;
    var sueldomaxf = 0;
    var sueldomaxfa = 0;
    var sueldopromediom = 0;
    var sueldopromediof = 0;
    var sueldonetof = 0;
    var sueldonetom = 0;
    var sueldopromedio = 0;
    var acumulador = 0;
    var acumulador1 = 0;
    var acumulador2 = 0;
    //fin de variables
function ComenzarIngreso () 
{
while (contador != 8)
{    
contador ++;
console.log (contador)
asignarDatos ()
if (contador ==8)
{
    realizarOperaciones ()
}
}
function asignarDatos ()
{
    tomarEdad ()
    tomarSexo ()
    tomarSueldo ()
    tomarEcivil ()
    tomarLegajo ()
    tomarNacionalidad ()
}
function tomarEdad ()
{
edad = prompt ("Ingrese su edad porfavor");
edad = parseInt (edad)
while (edad <18 || edad >90 || isNaN (edad))
{
                    edad = prompt ("Ingrese denuevo su edad")
}
}


function tomarSexo ()
{
sexo = prompt ("Ingrese su sexo porfavor")                
while (sexo != "m" && sexo != "f")
{
sexo = prompt ("Ingrese denuevo su sexo")
                        
}
}
function tomarSueldo ()
{
sueldo =prompt ("Ingrese su sueldo porfavor");
sueldo = parseInt (sueldo)
if (sueldo < 8000 || isNaN (sueldo))
{
sueldo = prompt ("Ingrese denuevo su sueldo")                   
}
}
function tomarEcivil ()
{
ecivil = prompt ("Ingrese su estado civil porfavor");
ecivil = parseInt (ecivil)
while (ecivil <1 && ecivil > 4 || isNaN (ecivil))
{
evicil = prompt ("Ingrese su estado civil denuevo")
}
}

function tomarLegajo ()
{
legajo = prompt ("Ingrese su legajo porfavor");
legajo = parseInt (legajo)
while (legajo < 0999 && legajo > 9999 || isNaN (legajo))
{
legajo = prompt ("Ingrese su legajo denuevo")
}
}

function tomarNacionalidad ()
{
nacionalidad = prompt ("Ingrese su nacionalidad porfavor");
while (nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n")
{
nacionalidad = prompt ("Ingrese su nacionalidad denuevo")
}
}
function realizarOperaciones
// 1)
if (nacionalidad == "n" && sueldo > sueldomaxna)
{
sueldomaxna = sueldo         
}
// 2)
if (sueldomaxf < sueldo && sexo == "f")
{
sueldomaxf = sueldo
}
if (nacionalidad == "a" && sueldomaxfa < sueldo && sexo == "f")
{
sueldomaxfa = sueldo
}  
// 3)
if (sexo == "f")
{
acumulador1 = acumulador1 + sueldo
if (contador == 3)
{
sueldopromediof = acumulador % contador
}
}
if (sexo == "m")
{
acumulador2 = acumulador2 + sueldo
if (contador == 3)
sueldopromediom = acumulador1 % contador
}
if (contador == 3)
{
sueldopromedio = (sueldopromediof + sueldopromediom) / 2
}
}alert ("1)El sueldo maximo de los nacionalizados es " + sueldomaxna)
alert ("2)El sueldo maximo femenino es " + sueldomaxf + " y el sueldo maximo de argentinas es " + sueldomaxfa)
alert ("3) El sueldo promedio femenino es " + sueldopromediof + ", el sueldo promedio masculino es " + sueldopromediom + " y el sueldo promedio general es " + sueldopromedio)
document.getElementById ("Edad").value = edad
        convertirSexo ()
        document.getElementById ("Sexo").value = sexo
        convertirEcivil ()
        document.getElementById ("EstadoCivil").value = ecivil
        document.getElementById ("Sueldo").value = sueldo
        document.getElementById ("Legajo").value = legajo
        convertirNacionalidad ()
        document.getElementById ("Nacionalidad").value = nacionalidad

             function convertirEcivil ()

                {switch (ecivil)
                {
                case "1" : ecivil = "Soltero"
                break;
                case "2" : ecivil ="Casado"
                break;
                case "3" : ecivil ="Divorciados"
                break;
                case "4" : ecivil ="viudos"
                break;
                }}

                function convertirSexo ()

                {switch (sexo)
                {
                case "m" : sexo = "Masculino"
                break;
                case "f" : sexo = "Femenino"
                break;
                }}

                function convertirNacionalidad ()

                {switch (nacionalidad)
                {
                case "a" : nacionalidad = "Argentino"
                break;
                case "e" : nacionalidad = "Extrajero"
                break;
                case "n" : nacionalidad = "Nacionalizados"
                break;
                }}
}
