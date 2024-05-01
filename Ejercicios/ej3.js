/* Ejercicio 1: 
Crea una función de flecha que tome un número como argumento y devuelva su cuadrado. */

let cuadrado = num => num * num;
console.log(cuadrado(5)); // 25

/* Ejercicio 2:
Crea una función de flecha que tome dos números como argumentos y devuelva su suma. */

let suma = (num1, num2) => num1 + num2;
console.log(suma(3, 4)); // 7

/* Ejercicio 3: 
Crea una función de flecha que no tome ningún argumento y devuelva un número aleatorio entre 0 y 1.*/
let aleatorio = () => Math.random();
console.log(aleatorio()); // Un número aleatorio entre 0 y 1

/*Ejercicio 4: 
Crea una función de flecha que tome una cadena como argumento y devuelva la cadena en mayúsculas. */

let aMayusculas = cadena => cadena.toUpperCase();
console.log(aMayusculas("hola")); // "HOLA"

/*Ejercicio 5:
Crea una función de flecha que tome un array de números como argumento
 y devuelva el array ordenado de menor a mayor.*/

let ordenar = array => array.sort((a, b) => a - b);
console.log(ordenar([5, 2, 9, 1, 5, 6, 3])); // [1, 2, 3, 5, 5, 6, 9]

