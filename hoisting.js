// Hosting es cuando las variables y las funciones se procesan antes de todo el codigo

// Hoisting en las variables
// __________________________
console.log(miNombre);

// definir una variable
var miNombre;

// Si lo dejamos hasta aca lo que va apasar es un undefine
// por que dice que no tiene que imprimir

// inicializar una variable
miNombre = "Diego De Granda";
// ---------------------------------------------------------
// basicamente lo que esta pasando es lo siguiente
var miNombre = undefined;
console.log(miNombre + " Soy ese Hoisting");
miNombre = "Diego";

// Hoisting en las variables
// _______________________

hey();
function hey() {
  console.log("Hola " + miNombre);
}
var miNombre = "Diego";
// por buenas practicas lo que tenemos que hacer con las funciones es definirlas al inicio del documento sin importar si la tengamos que usar en la linea 500
