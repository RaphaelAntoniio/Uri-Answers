var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let firstNote = Number(lines.shift());
let secondNote = Number(lines.shift());
let thirdNote = Number(lines.shift());

average = (firstNote * 2 + secondNote * 3 + thirdNote * 5)/10;

console.log(`MEDIA = ${average.toFixed(1)}`);