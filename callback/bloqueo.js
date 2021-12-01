const fs = require('fs');

console.log(Date.now());
const data = fs.readFileSync('./input.txt');
console.log(Date.now());
console.log(data.toString());
console.log('Ultima instrucción.');