//Tipos de datos primitivos

console.log('#### Number: representa enteros u decimales ####')
let integer = 42;
let decimal = 3.14;
console.log(typeof (integer), typeof (decimal));

console.log('#### String: representa cadenas de texto ####');
let simpleQuote = 'hello';
let doubleQuote = "world";
let backtick = `hello world`;
console.log(typeof (simpleQuote), typeof (doubleQuote), typeof (backtick));

console.log('#### Boolean: representa valores de verdad o falsos ####');
let trueValue = true;
let falseValue = false;
console.log(typeof (trueValue), typeof (falseValue));

console.log('#### Null: representa ausencia intencional de cualquier valor ####');
let empty = null;
console.log(typeof (empty));

console.log('#### Undefined: representa a un variable no declarada ####');
let UndefinedValue;
console.log(UndefinedValue);

//Symbol: representa un valor unico y no modificable, se usa como identificadores unicos como propiedades de un objeto
let symbol = Symbol('description');
console.log(typeof (symbol));



