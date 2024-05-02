const boton = document.getElementById("boton");
const nombre = document.getElementById("nombre");
const h2 = document.getElementById("h2");
const h1 = document.getElementById("h1");

boton.addEventListener("click", recibirNombre);

function recibirNombre () {
  h1.textContent = nombre.value;
  h2.textContent = "Hola 👋";
  nombre.value = "";
}
