//______________________________________________________
// for
//______________________________________________________
var estudiantes = ["Mario", "Maria", "Sergio", "Rosa", "Daniel"];
function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}
for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}
var eliminarEstudiante = estudiantes.shift("Mario");
console.log("");
// for of el singular de un grupo plural, mientras existan elementos en nuestro grupo oplural se seguira ejecutando nuestra tarea
for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}

//______________________________________________________
// While
//______________________________________________________
console.log("______________________________________________________");
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}
// while quiere decir que mientras lo que esta sucediendo en el while este vigente va a estar sucediendo
while (estudiantes.length > 0) {
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}
