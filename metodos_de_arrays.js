//______________________________________________________
// Métodos de recorridos de Arrays
//______________________________________________________

var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Television", costo: 25000 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

//______________________________________________________
// Metodo FILTER este va a validar si algo es verdadero o es falto
// el metodo va a crear un nuevo array sin modificar el ya existente
//______________________________________________________

var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 5000;
});
articulosFiltrados;

//______________________________________________________
// Metodo MAP este va a ayudar a mapear ciertos objetos
// el metodo va a crear un nuevo array sin modificar el ya existente
//______________________________________________________

var nombreArticulo = articulos.map(function (articulo) {
  return articulo.nombre;
});
nombreArticulo;

//______________________________________________________
// Metodo FIND este va a ayudar a encontrar algo dentro del array
// el metodo va a crear un nuevo array sin modificar el ya existente con el valñor que le estemos pasando
//______________________________________________________

var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Laptop";
});
encuentraArticulo;

//______________________________________________________
// Metodo FOR EACH()
// este metodo va a filtrar cosas sin MODIFICAR el array original haciendo un filtrado de los parametroa que busquemos
//______________________________________________________
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

//______________________________________________________
// Metodo some()
// este metodo va regresa una validacion de verdadero o falso para articulos que cumplan ese tipo de validacion
//______________________________________________________
var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});
articulosBaratos;
