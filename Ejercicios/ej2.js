/* Ejercicio 1:
 Declarar una variable  var ("Hola"), let ("Mundo") y const ("!") e imprimir su valor.  */

 var variableVar = "Hola";
 let variableLet = "Mundo";
 const variableConst = "!";
 
 console.log(variableVar); // Salida: Hola
 console.log(variableLet); // Salida: Mundo
 console.log(variableConst); // Salida: !

/* ejercicio 2:
Modificar el valor de las variables. Muestra el valor. */

var variableVar = "Hola";
let variableLet = "Mundo";
// Descomenta la siguiente línea para ver el error
// variableConst = "Adiós"; // Error: Assignment to constant variable.

variableVar = "Adiós";
variableLet = "Universo";

console.log(variableVar); // Salida: Adiós
console.log(variableLet); // Salida: Universo


/* Ejercicio 3:
Demostrar el hoisting con var , let y const. */
// var 

console.log(variable_var); // Salida: undefined
var variable_var = "Hola";
console.log(variable_var); // Salida: Hola

// let

// Descomenta la siguiente línea para ver el error
// console.log(variable_Let); // Error: variableLet is not defined
let variable_let = "Hola";
console.log(variable_let); // Salida: Hola

// const

// Descomenta la siguiente línea para ver el error
// console.log(variableConst); // Error: variableConst is not defined
const variable_const = "Hola";
console.log(variable_const); // Salida: Hola



/*  ejercicio 4:
Demostrar el alcance de una variable en una función. 
Declara una variable var let y const y muestra el valor. */

// var
function pruebaVar() {
  var variableVar = "Hola";
}

pruebaVar();
// Descomenta la siguiente línea para ver el error
// console.log(variableVar); // Error: variableVar is not define

// let
function pruebaLet() {
  let variableLet = "Hola";
}

pruebaLet();
// Descomenta la siguiente línea para ver el error
// console.log(variableLet); // Error: variableLet is not defined

// const
function pruebaConst() {
  const variableConst = "Hola";
}

pruebaConst();
// Descomenta la siguiente línea para ver el error
// console.log(variableConst); // Error: variableConst is not defined


/* Ejercicio 5:
Declara una variable let y una const dentro de una función y muestra el valor.
observa el resultado */

function pruebaLetConst() {
  let variableLet = "Hola";
  const variableConst = "Mundo";
  console.log(variableLet + " " + variableConst); // Salida: Hola Mundo
}

pruebaLetConst();
// console.log(variableLet); // Error: variableLet is not defined
// console.log(variableConst); // Error: variableConst is not defined


/* Ejercicio 6: 
como solucionariamos los errores del ejercio anterior.  Aceptas el reto 😜 */
function pruebaLetConst() {
  let variableLet = "Hola";
  const variableConst = "Mundo";
  console.log(variableLet + " " + variableConst); // Salida: Hola Mundo
  return { variableLet, variableConst };
}

const variables = pruebaLetConst();
console.log(variables.variableLet); // Salida: Hola
console.log(variables.variableConst); // Salida: Mundo

// Explicacion   ...en el ejercicio anterior  
/*
Las dos líneas de código comentadas al final intentan imprimir las variables variableLet y variableConst 
fuera de la función pruebaLetConst(). Sin embargo, debido a que estas variables se declararon dentro de la función, 
su alcance se limita a esa función. Esto significa que no se pueden acceder fuera de la función, 
por lo que intentar imprimirlos resultará en un error que indica que las variables no están definidas. 
Esto demuestra el concepto de alcance de bloque en JavaScript, 
donde las variables declaradas con let y const tienen un alcance limitado


Una solucion : 

Para solucionar el problema de acceder a las variables variableLet y variableConst fuera de la función, 
podrías devolver las variables desde la función o declararlas
 en un alcance que sea accesible tanto dentro como fuera de la función. */
