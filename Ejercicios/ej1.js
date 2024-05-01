/*  Ejercicio #1
Usando un bucle for, Imprime los números del 1 al 5. */

for(let i = 1; i <= 5; i++) {
  console.log(i);
}

/*  Ejercicio #2
Usando un bucle while, Imprime los números del 5 al 1 en orden descendente.. */

let n = 5;

while(n > 0) {
    console.log(n);
    n--;
}

/*  Ejercicio #3
Usando un bucle do...while, Imprime los números pares del 0 al 10. */

let c = 0;

do {
    if(c % 2 == 0) {
        console.log(c);
    }
    c++;
} while(c <= 10);

/*  Ejercicio #4
Crea un objeto llamado "persona" con tres propiedades: "nombre", "edad" y "ciudad". 
Luego, se utiliza un bucle "for...in" para iterar sobre las propiedades del objeto "persona" */

let persona = {nombre: "Juan", edad: 30, ciudad: "Madrid"};
for(let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

/*  Ejercicio #5
Escribe un programa que recorra el array frutas que contiene diferentes tipos de frutas
como "manzana", "plátano" y "cereza", utilizando un bucle for...of. 
Para cada fruta en el array, imprime el nombre de la fruta en la consola.
*/

let frutas = ["manzana", "plátano", "cereza"];

for(let fruta of frutas) {
    console.log(fruta);
}

/*  Ejercicio #6
Con los datos del ejercicio anterior, utilizando el método forEach(). 
Imprime el índice y el nombre de la fruta en la consola.
*/

// let frutas = ["manzana", "plátano", "cereza"];
frutas.forEach((fruta, indice) => {
    console.log(`Índice: ${indice}, Fruta: ${fruta}`);
});

/*  Ejercicio #7
Usando un bucle for, Imprime los números del 1 al 5, pero detén el bucle si el número es 3.
*/

for(let i = 1; i <= 5; i++) {
  if(i === 3) {
      break;
  }
  console.log(i);
}

/*  Ejercicio #8
Usando un bucle while, Imprime los números del 1 al 5, pero omite el número 3.
*/

let u = 0;
while(u < 5) {
    u++;
    if(u === 3) {
        continue;
    }
    console.log(u);
}

/*  Ejercicio #9
Usando un bucle do...while, Imprime los números del 5 al 1 en orden descendente.
*/

let i = 6;
do {
    i--;
    console.log(i);
} while(i > 1);

/*  Ejercicio #10
Escribe un programa que recorra el array frutas que contiene diferentes tipos de frutas
como "manzana", "plátano" y "cereza", utilizando un bucle for...in. 
Para cada índice en el array, imprime el valor correspondiente en la consola. 
*/

// let frutas = ["manzana", "plátano", "cereza"];

for(let indice in frutas) {
    console.log(indice);
}









