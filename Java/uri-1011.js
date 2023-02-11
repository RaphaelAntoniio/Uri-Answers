var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let radius=parseFloat(lines.shift());
let pi = 3.14159;
let volume = (4/3.0)*pi*radius**3;

console.log(`VOLUME = ${volume.toFixed(3)}`);