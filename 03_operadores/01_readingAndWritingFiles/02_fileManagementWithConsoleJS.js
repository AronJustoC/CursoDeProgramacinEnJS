const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (name) => {
  rl.question('How old are you?', (age) => {
    console.log(`Hello ${name}, you are ${age} years old.`);
    rl.close();
  });
});
