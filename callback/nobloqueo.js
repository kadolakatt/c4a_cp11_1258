const fs = require('fs');

console.log(Date.now());
const data = fs.readFile('./input.txt', function(err, data) {
    if (err) return console.log(err);
    console.log(Date.now());
    console.log(data.toString());
});
console.log(Date.now() + ' - Ultima instrucción.');