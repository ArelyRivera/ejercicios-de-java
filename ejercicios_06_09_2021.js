//EJERCICIO 06/09/2021
//Crear un programa que solicite al usuario su nombre por prompt y devuelva el siguiente saludo:
//Hola nombre, saludos desde javascript
//El saludo puede ser mostrado por consola o por html
/*
var nombre = prompt('¿cual es tu nombre');

    document.write('Hola '   + nombre +   ' saludos desde Javascript');//El más indica que la variable debe escribirse
*/

//Ejercicio 2 . Crear un programa que solicite 2 números por prompt. Mandar
//esos dos valores a una función por parámetros para realizar
//para realizar las operaciones aritméticas básicas(suma, resta, multiplicación y division)
//Mostrar el resultado por consola o por html

    var nu1 = parseInt(prompt ('Ingrese primer numero'));
    var nu2 = parseInt(prompt ('Ingrese segundo número'));

    function sumar (nu1, nu2)
    {
        var sumadelresultado = nu1 + nu2;
        document.write(sumadelresultado + '</br>');
    }
        sumar (nu1, nu2);
    function restar (nu1, nu2)
    {
        var sumadelresultado = nu1 - nu2;
        document.write(restadelresultado + '</br>');
    }
        restar (nu1, nu2);
    function dividir (nu1, nu2)
    {
        var sumadelresultado = nu1 / nu2;
        document.write(divisióndelresultado + '</br>');
    }
        dividir (nu1, nu2);
    function multiplicar (nu1, nu2)
    {
        var sumadelresultado = nu1 * nu2;
        document.write(multiplicaciondelresultado + '</br>');
    }
         multiplicar (nu1, nu2);