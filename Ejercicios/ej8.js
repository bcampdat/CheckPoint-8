/*Ejercicio 1:
Crear una función que retorne una promesa que se resuelva después de 2 segundos. */

async function ejercicio1() {
  const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("¡Promesa resuelta!");
      }, 2000);
  });

  const resultado = await promesa;
  console.log(resultado);
}

ejercicio1();

/* Ejercicio 2:
 Crear una función asíncrona que espere el resultado de varias promesas
 y las una en una sola variable saludo.*/

async function ejercicio2() {
  const promesa1 = Promise.resolve("Hola");
  const promesa2 = Promise.resolve(" ");
  const promesa3 = Promise.resolve("Mundo");

  const resultados = await Promise.all([promesa1, promesa2, promesa3]);

  const saludo = resultados.join('');

  console.log(saludo); // "Hola Mundo"
}

ejercicio2();

/* Ejercicio 3: 
Crear una función asíncrona que maneje el error de una promesa rechazada.*/

async function ejercicio3() {
  try {
      const promesa = Promise.reject("¡Promesa rechazada!");
      await promesa;
  } catch (error) {
      console.error("Ha ocurrido un error: ", error);
  }
}

/*
Ejercicio 4:
Promesa con async/await Crea una función asíncrona que espere a que se resuelva una promesa
 que devuelve el mensaje “¡Hecho!” después de 1 segundo.
*/

async function ejercicio4() {
  let promesa = new Promise((resolve, reject) => {
      setTimeout(() => resolve("¡Hecho!"), 1000)
  });

  let resultado = await promesa; // Espera hasta que la promesa se resuelva
  console.log(resultado); // Imprime: "¡Hecho!"
}

ejercicio4();

/*
Ejercicio 5:
Crea una función asíncrona que intente esperar a que se resuelva una promesa que se rechaza con el mensaje “¡Error!” después de 1 segundo. Asegúrate de manejar el error correctamente.
*/

async function ejercicio5() {
  try {
      let promesa = new Promise((resolve, reject) => {
          setTimeout(() => reject("¡Error!"), 1000)
      });

      let resultado = await promesa; // Espera hasta que la promesa se resuelva
      console.log(resultado);
  } catch(error) {
      console.log(error); // Imprime: "¡Error!"
  }
}

ejercicio5();

/*
Ejercicio 6:
Crear una función asíncrona que maneje el error de una petición HTTP fallida.
*/

async function ejercicio6() {
  try {
      const respuesta = await fetch('https://url-no-existente.com');
      const datos = await respuesta.json();

      console.log(datos);
  } catch (error) {
      console.error("Error al acceder a HTTP: ", error);
  }
}

ejercicio6();

