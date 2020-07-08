//______________________________________________________
// Objects
//______________________________________________________

var objeto = {};
//objeto tipo objeto
var miAuto = {
  marca: "Toyota",
  modelo: "Corola",
  anio: 2020,
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.anio}`);
  },
  // This es una variable que hace referencia al objeto = miAuto en el apartado.modelo me va a traer el modelo del coche
};

miAuto.marca;
miAuto.modelo;
miAuto.anio;
miAuto.detalleDelAuto();

//______________________________________________________
// Objects: Función constructora
//______________________________________________________

var miAuto = {
  marca: "Toyota",
  modelo: "Corola",
  anio: 2020,
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.anio}`);
  },
};

function auto(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}
auto;

// el operador new genera una nueva instancia de nuestra funcion constructuroa
// instancia: es un objeto que deriba de otro objeto
var autoNuevo = new auto("Tesla", "Model 3", 2020);
autoNuevo;

var autoNuevo2 = new auto("Audi", "R8", 2021);
autoNuevo2;

var autoNuevo3 = new auto("Tesla", "Model X", 2020);
autoNuevo3;

//ejercicio

var autos = [];

function autosNuevos(marca, modelo, anio) {
  this.autoNuevoMarca = marca;
  this.autoNuevoModelo = modelo;
  this.autoNuevoAnio = anio;
}

for (let i = 1; i < 30; i++) {
  var autoNuevoMarca = prompt("Ingresa la marca del auto: ");
  var autoNuevoModelo = prompt("Ingresa el modelo del auto: ");
  var autoNuevoAnio = prompt("Ingresa el año del auto: ");
  autos.push(new autosNuevos(autoNuevoMarca, autoNuevoModelo, autoNuevoAnio));
}
for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}
