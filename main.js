//alert('Hola Mundo'); Este fué el primer ejercicio

//VARIABLES Este fué el segundo
//El valor puede cambiar
var nombre = 'Emma';
var apellido = 'Rivera Cruz'
var edad = 26;

let telefono;
let colorFavorito = 'Rosa';
let comodaFavorita = 'Mole'

//CONSTANTES No puedo cambiar el valor, ejemplos:
const gravedad = 9.8;
//gravedad = 'no hay gravedad';
const estudiantes = 20;

// Let y var diferencias EJECRCIOCIO DE 02/09/2021
var numero = 40;

if(true){
    var numero = 50; //tendrá el valor de 50
    console.log(numero); //
}

console.log(numero); // tendrá el valor 50

var numero2 = 100; //Siempre que sean var se pueden redeclarar por ejemplo:
//var numero2 = 30;
console.log(numero2);//Imprime 100
let otronumero = 90;

if(true){
    let numero2 = 5;//Imprime 5 (variables de scope, es decir solo viven por bloques de codigo y fuera del bloque no existe)
    console.log(numero2);
    let numero3 = 27;
    console.log(numero3);
}

console.log(numero2);//imprime 100 (por lo anterior aquí sigue siendo 100)
console.log(otronumero);

//alert(nombre); hasta aquí fue segundo ejercicio

//ESTE FUÉ EL TERCER EJERCICIO
//console.log(typeof(nombre));//sirve para saber el tipo de datos typeof. Indentifica que el tipo de elemento es string
//console.log(typeof(edad)); // identifica en la consola que el tipo de elemento es number
