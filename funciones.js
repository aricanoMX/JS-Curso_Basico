// Declarativas

// funcion guarda un valor en memoria para reservar el nombre y el calculo de la funcion
function miFuncion() {
  return 3;
}
miFuncion();

function saludarEstudiantes(estudiante) {
  console.log(estudiante);
}
function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Diego Degranda");

function sumaDeNumeros(a, b) {
  var resultado = a + b;
  return resultado;
}
sumaDeNumeros(15, 385);

// Expresion (Anonimas) por que la funcion no tiene nombre
// Las funciones de expresión son aquellas que guardamos en una variable, por lo tanto, no es necesario nombrarlas y tienen la siguiente sintaxis:
var miFuncion = function () {
  return a + b;
};

// aca se manda a llamar el nombre de la variable
miFuncion();
