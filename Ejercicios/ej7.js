/*Ejercicio 1:
Crea una promesa que se resuelva después de 1 segundo y que devuelva el mensaje “¡Promesa resuelta!”.
*/

let promesa1 = new Promise((resolve, reject) => {
  // Simulamos una operación asíncrona con setTimeout
  setTimeout(() => {
      resolve("¡Promesa resuelta!");
  }, 1000);
});

promesa1.then(resultado => console.log(resultado)); // Imprime: "¡Promesa resuelta!"

/*
Ejercicio 2:
Crea una promesa que se rechace después de 2 segundo y que devuelva el mensaje “¡Promesa rechazada!”.
*/

let promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject("¡Promesa rechazada!");
  }, 2000);
});

promesa2.catch(error => console.log(error)); // Imprime: "¡Promesa rechazada!"

/*
Ejercicio 3:
Encadenamiento de promesas 
Crea una promesa que se resuelva con el valor 3 después de 3 segundo.
Luego, encadena otras dos promesas que multipliquen el resultado por 2.
*/

let promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(1);
  }, 3000);
});

promesa3
  .then(result => {
      console.log(result); // Imprime: 1
      return result * 2;
  })
  .then(result => {
      console.log(result); // Imprime: 2
      return result * 2;
  })
  .then(result => {
      console.log(result); // Imprime: 4
  });


/*
Ejercicio 4:
Manejo de errores en promesas Crea una promesa que se rechace con el mensaje “¡Error!” después de 4 segundo.
Asegúrate de manejar el error correctamente.
*/

let promesa4 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject("¡Error!");
  }, 4000);
});

promesa4
  .then(result => console.log(result))
  .catch(error => console.log(error)); // Imprime: "¡Error!"

/*
Ejercicio 5: 
Crea dos promesas, una que se resuelva con el valor 1 después de 1 segundo 
y otra que se resuelva con el valor 2 después de 2 segundos.
 Utiliza Promise.all para esperar a que ambas promesas se resuelvan
*/

let promesa7_1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

let promesa7_2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 2000);
});

Promise.all([promesa7_1, promesa7_2]).then(resultados => {
  console.log(resultados); // Imprime: [1, 2]
});


/*
Ejercicio 6:
Crea dos promesas, una que se resuelva con el valor 1 después de 2 segundos
y otra que se resuelva con el valor 2 después de 1 segundo. 
Utiliza Promise.race para obtener el valor de la promesa que se resuelve primero.
*/

let promesa8_1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});

let promesa8_2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1000);
});

Promise.race([promesa8_1, promesa8_2]).then(resultado => {
  console.log(resultado); // Imprime: 2
});

/*
Ejercicio 7: 
Crea una promesa que se resuelva con el mensaje “¡Hecho!” después de 1 segundo.
Asegúrate de utilizar finally para imprimir un mensaje cuando la promesa se haya resuelto o rechazado.
*/

let promesa9 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("¡Hecho!"), 1000);
});

promesa9
  .then(result => console.log(result))
  .finally(() => console.log("¡Finalizado!")); // Imprime: "¡Finalizado!"


/*
Ejercicio 8: 
Crea una promesa pero no la resuelvas ni la rechaces. 
Imprime el estado de la promesa para verificar que está pendiente.
*/

let promesa10 = new Promise((resolve, reject) => {
  // No llamamos a resolve ni a reject
});

console.log(promesa10); // Imprime: Promise { <pending> }
