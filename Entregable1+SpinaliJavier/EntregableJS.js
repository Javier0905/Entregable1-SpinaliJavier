// Declaración de variables y constantes
let nombres = ["Juan", "María", "Pedro", "Ana"];
const edadMinima = 18;
let edades = [];
let sumaEdades = 0;

// Función que verifica si una persona es mayor de edad
function esMayorDeEdad(edad) {
  return edad >= edadMinima;
}

// Ciclo for para solicitar las edades de las personas y calcular la suma de edades
for (let i = 0; i < nombres.length; i++) {
  let edad = parseInt(prompt('Ingresa la edad de ' + nombres[i]));
  edades.push(edad);
  sumaEdades += edad;
}

// Función que muestra el promedio de edades
function mostrarPromedioEdades() {
  let promedio = sumaEdades / edades.length;
  alert('El promedio de edades es '+ promedio);
}

// Ciclo while para mostrar el nombre de cada persona mayor de edad
let j = 0;
while (j < nombres.length) {
  if (esMayorDeEdad(edades[j])) {
    console.log(nombres[j]);
  }
  j++;
}

// Uso de cuadro de diálogo confirm para preguntar al usuario si desea mostrar el promedio de edades
let mostrarPromedio = confirm("¿Deseas mostrar el promedio de edades?");

// Uso de cuadro de diálogo alert para mostrar un mensaje al usuario
if (mostrarPromedio) {
  mostrarPromedioEdades();
} else {
  alert("Operación finalizada");
}