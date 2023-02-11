var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let pi = 3.14159;
let radius = input;
let area = pi * radius**2;

console.log(`A=${area.toFixed(4)}`);