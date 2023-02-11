var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let firstNote = Number(lines.shift());
let secondNote = Number(lines.shift());
let average=( firstNote*3.5 + secondNote*7.5)/11;
console.log(`MEDIA = ${average.toFixed(5)}`);