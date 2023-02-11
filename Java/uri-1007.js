var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let firstValue = Number(lines.shift());
let secondValue = Number(lines.shift());
let thirdValue = Number(lines.shift());
let fourthValue = Number(lines.shift());

let difference = firstValue * secondValue - thirdValue * fourthValue;

console.log(`DIFERENCA = ${difference}`);