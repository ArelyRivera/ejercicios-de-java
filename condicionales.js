//El punto js es referencia a que es un archivo de java script


//if(edad >= 18){ //Si la edad es mayor o igual a 18 marcará la siguiente leyenda
    //console.log('Eres mayor de edad');
   // document.write('Eres mayor de edad')
//}else{ //En caso de no cumplirse la condición entonces marcará la siguente
        //console.log('Eres menor de edad');
      //  document.write('Eres menor de edad')
//}

//EJERCICIO DE CLASE 
//Preguntarle al usuario su edad por prompt después de hacer un condicional if con las siguientes situaciones
//si el usuario es mayor a 18 y menor de 29 años mostrar mensaje felicidades
//has sido aceptado en el bootcamp de generation en caso contrario
//mostrar que no cuenta con los requisitos de programa
var edad = prompt('¿cual es tu edad');
if((edad >= 18) && (edad <= 29)){ //Si la edad es mayor o igual a 18 marcará la siguiente leyenda
    //console.log('Eres mayor de edad');
    document.write('Has sido aceptado en el bootcamp de generation')
}else{ //En caso de no cumplirse la condición entonces marcará la siguente
        //console.log('Eres menor de edad');
        document.write('No cuentas con los requisitos del programa')
}



