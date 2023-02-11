var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let [idItemOne, numberItemOne, priceItemOne] = lines.shift().split(' ');

let [idItemTwo, numberItemTwo, priceItemtwo] = lines.shift().split(' ');

let valueOne = numberItemOne * priceItemOne; 
let valueTwo = numberItemTwo * priceItemtwo;
let pay = valueOne + valueTwo;
console.log(`VALOR A PAGAR: R$ ${pay.toFixed(2)}`);