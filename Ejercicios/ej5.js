/* Ejercicio 1:
Combina dos arrays [1, 2, 3] y [4, 5, 6] en un solo array. */

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinado = [...array1, ...array2]; 

console.log(combinado); // [1, 2, 3, 4, 5, 6]


/* Ejercicio 2:
Crea una copia del array [1, 2, 3]. Añade un nuevo elemento al inicio del array*/

let arrayOriginal = [1, 2, 3];
let copiaArray = [0, ...arrayOriginal]; // [0, 1, 2, 3]

console.log(copiaArray); // [0, 1, 2, 3]

/* Ejercicio 3:
Combina dos objetos {nombre: "Beatriz", edad: 47} y {puesto: "Director", antigüedad: 4} en un solo objeto y crea una copia */

let objeto1 = { nombre: "Beatriz", edad: 47 };
let objeto2 = { puesto: "Director", antigüedad: 4 };

let objetoCombinado = { ...objeto1, ...objeto2 };
let copiaObjetoCombinado = { ...objetoCombinado };

console.log(objetoCombinado); // { nombre: "Beatriz", edad: 47, puesto: "Director", antigüedad: 4 }
console.log(copiaObjetoCombinado); // { nombre: "Beatriz", edad: 47, puesto: "Director", antigüedad: 4 }

/* Ejercicio 4:
Utiliza el operador de propagación para sumar todos los elementos de un array. */

function sumarElementos(...elementos) {
  return elementos.reduce((a, b) => a + b, 0); // Si llamamos a sumarElementos(1, 2, 3), devuelve 6
}

let arraySumado = sumarElementos( 2, 3);

console.log(arraySumado);

/*Ejercio 5:
Crea una función que acepte múltiples argumentos y los imprima. 
Como ejemplo de uso  imprime "Hola", "Mundo", "JavaScript" */

function imprimeArgumentos(...args) {
  args.forEach(arg => console.log(arg));
}
imprimeArgumentos('Hola', 'Mundo', 'JavaScript'); // Hola Mundo JavaScript


