// Coesion como podemos cambiar de un tipo de valor aotro tipo de valor

// Existen 2 tipos de coesiones las coesiones implicitas y las coesiones explicitas
// Coesiones implicitas lo que hace es que el lenguaje nos ayuda a cambiar el tipo de valor

var a = 4 + "7";
typeof a;
// Aca lo que hace es juntar un valor a otro valor

var b = 4 * "7";
typeof b;
// aca JavaScript nos ayuda y tranforma el 7 en un numero

// Coesion Explicita es como nosotros obligamos que un tipo de valor cambie a un tipo de valor que necesitemos
var c = 20;
var d = a + "Hola";

typeof d;

var e = String(a);
typeof e;
console.log(e);

var f = Number(e);
console.log(f);
