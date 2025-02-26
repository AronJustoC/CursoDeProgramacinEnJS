console.log('#### Object: coleccion de pares clave-valor ####');
let object = {
  name: 'aron',
  age: 42,
  isStudent: true,
  hobbies: ['programacion', 'juegos', 'leer']
};
console.log("La variable es de tipo: ", typeof (object));
console.log("El objeto es: ", object);
console.log("Entrar en una propiedad (object.nombre): ", object.name);

console.log('#### Array: coleccion de elementos ordenados ####');
let array = ['aron', 42, true, ['programacion', 'juegos', 'leer']];
console.log("La variable es de tipo: ", typeof (array));
console.log("El array es: ", array);
console.log("Entrar en un elemento del array (array[0]): ", array[0]);
console.log("Entrar en un elemento del array (array[3]): ", array[3]);

console.log('#### Function: coleccion de instrucciones que se ejecutan una vez definidas ####');
function sayHello() {
  console.log('Hola mundo');
}
sayHello();

//funciones con parametros y argumento
function sayHelloParameter(param = 'mundo') { // definimos el parametro param y le pasamos un valor por defecto
  console.log('Hola ' + param);
}
sayHelloParameter('argument2'); //Le pasamos un argumento

//Diferencia entre parametros y argumentos: parametros son variables que se pueden cambiar mientras la funcion se ejecuta, argumentos son variables que no se pueden cambiar

console.log('#### Date: representa una fecha y hora ####');
let date = new Date(2023, 1, 1, 12, 0, 0); // Creamos una fecha
console.log("La variable es de tipo: ", typeof (date));
console.log("La fecha es: ", date);

//Diferenica entre Datos primitivos y complejos:
// Los primitivos se almacenan por valor (en la pila de memoria).
// Los objetos (complejos) se almacenan por referencia (en el heap de memoria).
