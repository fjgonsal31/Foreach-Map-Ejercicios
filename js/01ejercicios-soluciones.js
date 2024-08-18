// Soluciones: Ejercicios de forEach y map en JavaScript

// Datos de ejemplo
const numeros = [1, 2, 3, 4, 5];
const palabras = ['JavaScript', 'es', 'genial'];
const personas = [
  { nombre: 'Ana', edad: 28 },
  { nombre: 'Juan', edad: 32 },
  { nombre: 'María', edad: 25 }
];

// 1. forEach
console.log("Ejercicio 1: forEach");
numeros.forEach(function(numero) {
  console.log(numero * 2);
});

// 2. forEach con índice
console.log("\nEjercicio 2: forEach con índice");
palabras.forEach(function(palabra, indice) {
  console.log(`Palabra en índice ${indice}: ${palabra}`);
});

// 3. forEach con objetos
console.log("\nEjercicio 3: forEach con objetos");
personas.forEach(function(persona) {
  console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

// 4. map básico
console.log("\nEjercicio 4: map básico");
const numerosAlCuadrado = numeros.map(function(numero) {
  return numero * numero;
});
console.log(numerosAlCuadrado);

// 5. map con strings
console.log("\nEjercicio 5: map con strings");
const longitudPalabras = palabras.map(function(palabra) {
  return palabra.length;
});
console.log(longitudPalabras);

// 6. map con objetos
console.log("\nEjercicio 6: map con objetos");
const soloNombres = personas.map(function(persona) {
  return persona.nombre;
});
console.log(soloNombres);

// 7. Combinación de map y forEach
console.log("\nEjercicio 7: Combinación de map y forEach");
const edades = personas.map(function(persona) {
  return persona.edad;
});
console.log("Las edades son:", edades);

let sumaEdades = 0;
edades.forEach(function(edad) {
  sumaEdades += edad;
});
console.log("La suma de todas las edades es:", sumaEdades);

