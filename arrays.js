// Estructura de datos que van a guardar ciertos datos,

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas);

console.log(frutas.length);
// con esto podemos observar cuantos objetos tiene nuestro array

// para nosotros poder acceder a un elemento particular de nuestro array lo que hacemos es acceder a ala posisicion del objeto
console.log(frutas[2]);
//______________________________________________________
// Metodos que permiten mutar los elementos en un array
//______________________________________________________

// PUSH lo que hace es agregar elementos al final del array
var masFrutas = frutas.push("Uva");
console.log(frutas[4]);
console.log(frutas);

// POP elimina el utlimo elemento existente en el array
var eliminarFruta = frutas.pop("Uva");
console.log(frutas);

// UNSHIFT agrega elementos al inicio del array
var agregaralInicio = frutas.unshift("Uva");
console.log(frutas);

// SHIFT elimina el elemento que esta en el inicio del array
var eliminarAlInicio = frutas.shift("Uva");
console.log(frutas);

// Este nos ayuda a identifical la posicion de un objeto en cuestion
var posicion = frutas.indexOf("Cereza");
console.log(posicion);
