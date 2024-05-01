/* Ejercicio 1:
Intercambiar los valores de las variables a y b utilizando desestructuración*/

let a = 1, b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1

/* Ejercicio 2: 
Crea una variable para el primer elemento de un array y otra para el resto de elementos. */

let [primero, ...resto] = [1, 2, 3, 4, 5];
console.log(primero); // 1
console.log(resto); // [2, 3, 4, 5]

/* Ejercicio 3: 
Desestructura un objeto en variables con nombres diferentes a las propiedades del objeto
Tu tarea es modificar el objeto desestructurado de tal manera que al imprimir "ruedas" 
se muestre el valor de "coche" y al imprimir "rail" se muestre el valor de "tren".
(Ford, Ave)
*/

let {coche: ruedas, tren: rail} = {coche: "Ford", tren: "Ave"};
console.log(ruedas); // 1
console.log(rail); // 2

/* Ejercicio 4:
Desestructura un array y un objeto dentro de una función suma [a, b] y saludo {nombre, edad}
respectivamente para usar sus elementos como argumentos. */

// Array
function suma([a, b]) {
  return a + b;
}
console.log(suma([1, 2])); // 3

// Objeto
function saludo({nombre, edad}) {
  return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}
console.log(saludo({nombre: 'Juan', edad: 30}));
 // Hola, mi nombre es Juan y tengo 30 años.

/* Ejercicio 5:
Asigna valores a las variables patas, familia y mueble utilizando desestructuración de arrays.
Para ello, debes seguir los siguientes pasos:
    *  Crea una variable llamada patas y una variable llamada familia.
    *  Crea una variable llamada mueble y asigna el valor 'mesa' a ella.
    *  Utiliza la desestructuración de arrays para asignar los valores de las variables patas y familia a partir de los valores del array [[4, 'cocina']].**
    *  Imprime el valor de las variables patas, familia y mueble.*/

let [[patas, familia], mueble ] = [[4, 'cocina'], 'mesa'];
console.log(patas); // 4
console.log(familia); // cocina
console.log(mueble); // mesa

/* Ejercicio 6:
Desestructura un objeto anidado y asigna valores hola y mundo, a las propiedades
'hello' y nombre, y a las variables 'hello' y 'nombre'. */

let {intro: {hello, nombre}} = {intro: {hello: "hola", nombre: "mundo"}};
console.log(hello); // "hola"
console.log(nombre); // "mundo"
