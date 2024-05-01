/*Ejercicio 1:
 crear una clase Persona en JavaScript con un objeto maria que tiene niña 
y edad como atributos y jugar y comer como métodos: */

 class Persona {
  constructor(niña, edad) {
    this.niña = niña;
    this.edad = edad;
  }

  jugar() {
    console.log("La persona está jugando.");
  }

  comer() {
    console.log("La persona está comiendo.");
  }
}

// Create an instance of Persona
let maria = new Persona(true, 10);

// Call the methods
maria.jugar();  // Outputs: "La persona está jugando."
maria.comer();  // Outputs: "La persona está comiendo."

/*Ejercicio 2:
Crea una Subclase
Extiende la clase Persona y crea una clase Niño que incluya información sobre el sexo de la persona. */

class Niño extends Persona {
  hablar() {
    console.log("El niño está hablando.");
  }

  andar() {
    console.log("El niño está andando.");
  }
}

// Crear una instancia de Niño para Jose
let jose = new Niño(true, 15);

jose.hablar(); // Muestra: "El niño está hablando."
jose.andar();  // Muestra: "El niño está andando."

/*Ejercicio 3:
llama a los metodos del ejercicio 1 y observe el comportamiento */

// Llamar a los métodos de Maria
jose.jugar();  // Heredado de Persona, muestra: "La persona está jugando."
jose.comer();  // Heredado de Persona, muestra: "La persona está comiendo."
