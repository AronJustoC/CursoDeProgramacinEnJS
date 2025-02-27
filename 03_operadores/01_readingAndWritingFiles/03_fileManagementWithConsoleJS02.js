// Modulo process.stdin
process.stdin.setEncoding('utf8');

console.log('Escriba algo y presione enter:');

process.stdin.on('data', (data) => {
  console.log(`Recibido: ${data}`);
  process.exit(0);
});
