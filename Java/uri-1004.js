var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let sum = A + B;

console.log(`SOMA = ${sum}`);
