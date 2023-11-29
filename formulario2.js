// Seleccionar el formulario y agregar un evento de envío
var formulario = document.querySelector("#form");

formulario.onsubmit = function (e) {
  // Prevenir el envío predeterminado del formulario
  e.preventDefault();

  // Obtener elementos del formulario
  var nombreInput = formulario.elements[0];
  var edadInput = formulario.elements[1];
  var nacionalidadSelect = formulario.elements[2];

  // Obtener valores del formulario
  var nombre = nombreInput.value;
  var edad = edadInput.value;
  var indiceNacionalidad = nacionalidadSelect.selectedIndex;
  var nacionalidad = nacionalidadSelect.options[indiceNacionalidad].value;

  // Log de valores
  console.log(nombre, edad);
  console.log(nacionalidad);

  // Validar y agregar invitado
  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

// Crear botón de eliminar invitado
var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

// Función para agregar invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {
  // Mapear códigos de nacionalidad a nombres
  var nacionalidadNombre = {
    ar: "Argentina",
    mx: "Mexicana",
    vnzl: "Venezolana",
    per: "Peruana",
  };

  // Obtener la lista de invitados
  var lista = document.getElementById("lista-de-invitados");

  // Crear un nuevo elemento de lista
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // Función para crear un elemento en la lista
  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  // Mapear la nacionalidad al nombre correspondiente
  if (nacionalidadNombre.hasOwnProperty(nacionalidad)) {
    nacionalidad = nacionalidadNombre[nacionalidad];
  }

  // Crear elementos en la lista
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  // Crear botón de eliminar invitado para este elemento de lista
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  // Agregar evento de clic al botón de eliminar
  botonBorrar.onclick = function () {
    elementoLista.remove();
  };
}
