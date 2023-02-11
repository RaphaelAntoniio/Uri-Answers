var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let distance = lines.shift();

console.log(`${distance * 2} minutos`)