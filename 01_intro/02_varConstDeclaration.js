//Conoceremos como se declaran variables y constantes
//-Alcance(scope): Se refiere al alcance que tiene esta bariable en un ambito.
//-Reasiganble: Se puede cambiar la referencia de la variable a un nuevo valor.
//-Mutable: Se puede modificar el contenido del valor sin cambiar su referencia en memoria.
console.log('################### var #######################');
var age = 21;
console.log(typeof (age));
console.log(age);
//Alcance(scope): Funcion.
//Reasiganble: si.
//Mutable: si.

console.log('################### let #######################');
let userName = 'lucho';
console.log(typeof (userName));
console.log(userName);
//Alcance(scope): Bloque.
//Reasiganble: si.
//Mutable: si.

console.log('################### const #######################');
const sex = 'male';
console.log(typeof (sex));
console.log(sex);
//Alcance(scope): Bloque.
//Reasiganble: no.
//Mutable: si en arreblos y objetos.(ya que no cambiara el tipo en si que es array o obj.)






