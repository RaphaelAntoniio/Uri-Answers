var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let name = lines.shift();
let wage = parseFloat(lines.shift());
let sales = parseFloat(lines.shift());

let finalWage= sales * 15 / 100 + wage;

console.log(`TOTAL = R$ ${finalWage.toFixed(2)}` )