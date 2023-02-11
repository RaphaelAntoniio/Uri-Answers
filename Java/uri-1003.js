var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

prod = a * b;

console.log(`PROD = ${prod}`)