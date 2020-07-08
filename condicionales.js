// Condicionales: If, Else, else if

// if

if (true) {
  console.log("Hola");
}
// debido a que con el true todo se imprime
// esto lo que va a imprimir es un Hola

if (false) {
  console.log("Hola");
}
// Esto lo que va a  hacer es no imprimer nada por que la condicion es falsa popr lo tanto no se cumple

if (true) {
  console.log("Hola");
} else {
  console.log("soy falso");
}
// si una cosa no llega a pasar lo que va a pasar es la otra condicion

// validacion else if

if (true) {
  console.log("Hola");
} else if (false) {
  console.log("soy falso");
} else {
}
// esto lo que quiere dar a entender es que si no pasa una cosa pasa lo siguiente y si no pasa lo siguiente pasa lo otro

// ejemplo

var edad = 18;
if (edad === 18) {
  console.log("Puedes votar, será tu primera votación.");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("Eres menor de edad, aun no puedes votar");
}

// OPERADOR TERNARIO
// Todo una sentencia if en un solo renglon

// se declara con la palabra reservada condition
// luego  un signo de interrogación
// lo que queremos evaluar que sea verdadero
// luego :
// y la condificon de falso

condition ? true : false;

// ejemplo
var numero = 1;

var resultado =
  numero === 1
    ? "Soy el numero 1"
    : "No soy el numero 1, Soy el numero: " + numero;
console.log(resultado);

// ejercicio de piedra, papel y tijeras
// var pieda = "piedra";
// var tijera = "tijeras";
// var papel = "papel";

// var computadora = piedra > tijera > papel > piedrafinal  ;
// var juego = function(usuario, cpu){
//   if{usuario === cpu){
//     console.log("Hubo un error en el sistema favor de seleccionar objetos distintos")
//   }else if(usuario === piedra && cpu === papel){
//     console.log("Perdiste, La computadora es más inteligente que tu");
//     console.log("Tu ecogiste:" + usuario)
//     console.log("La computadora gano con: " + cpu);
//     }else if(usuario === tijera && cpu === piedra){
//     console.log("Perdiste, La computadora es más inteligente que tu");
//     console.log("Tu ecogiste:" + usuario)
//     console.log("La computadora gano con: " + cpu);
//   }else{
//     console.log("Perdiste");
//     console.log("Tu ecogiste:" + usuario)
//     console.log("Yo escogi" + piedra);
//   }
// }

// console.log(juego);
//_____________________________________________________________________
//_____________________________________________________________________
// otra forma de generar una condicion de manera distinta
// aunque a diferencia del if este trabaja por casos
var numero = 1;

switch (numero) {
  case 1:
    console.log("Soy un 1!");
    break;
  case 10:
    console.log("Soy un 10!");
    break;
  case 100:
    console.log("Sou un 100!");
    break;
  default:
    console.log("No soy ninguno de los anteriores, soy el numero " + numero);
}

var pieda = "piedra";
var tijera = "tijeras";
var papel = "papel";
var usuario;
switch (usuario) {
  case piedra:
    console.log("Perdiste, La computadora es más inteligente que tu");
    console.log("Tu ecogiste:" + usuario);
    console.log("La computadora gano con: " + papel);
    break;
  case papel:
    console.log("Perdiste, La computadora es más inteligente que tu");
    console.log("Tu ecogiste:" + usuario);
    console.log("La computadora gano con: " + tijera);
    break;
  case tijera:
    console.log("Perdiste, La computadora es más inteligente que tu");
    console.log("Tu ecogiste:" + usuario);
    console.log("La computadora gano con: " + piedra);
    break;
  default:
    console.log("Repite la jugada, escogiste el mismo objeto que la cpu");
}
