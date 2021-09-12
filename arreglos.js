//alert('Hola Mundo');
//Crear un programa que calucule el numero maximo
var numero1 = parseInt(prompt ('Ingrese primer número'));
var numero2 = parseInt(prompt ('Ingrese segundo número'));
var numero3 = parseInt(prompt("Ingrese tercer numero"));

if (numero1>numero2){
    if (numero1>numero3){
        document.write("El mayor es: " + numero1);
    }else {
        document.write("El mayor es: " + numero3);
    }

    }else if (numero2>numero3){
        document.write("El mayor es: " + numero2);
    }else {
        document.write("El mayor es: " + numero3);
    }
//usar array para almacenar un conjunto de datos homogeno, es decir
//todos ellos del mismo tipo

