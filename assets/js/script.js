//num1 va a ser un valor el cual se va a sumar en cada iteración con el valor que se ingrese 5 veces en num2

var num1 = parseInt(prompt("Ingresar primer número de suma"));
var resultado;
for (i = 0; i < 5; i++) {
    var num2 = parseInt(prompt("Ingrese número a sumar"));
    resultado = num1 + num2;
    console.log(num1 + "+" + num2 + "=" + resultado);
}

//Concatenar el primer texto ingresado con el resto hasta que el usuario ingrese "ESC"

var firstText = prompt("ingresa texto");
var textGlobal = firstText;
var text = " ";

while (text != 'ESC') {
    text = prompt('Ingrese un texto a concatenar, ingresar "ESC" para salir');
    textGlobal = textGlobal + " " + text;
    console.log(textGlobal);
}

//Ingrese la cantidad de veces que se repita el nombre y despues ingreso el nombre a repetir, ejecutado en la consola

var num1 = parseInt(prompt("Ingresar la cantidad de veces que quieres repetir el nombre"));
var nombre = prompt("ingrese nombre");

for (i = 1; i <= num1; i++) {
    console.log(nombre);
}