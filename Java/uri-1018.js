var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let notes = lines.shift();

let notes100 = parseInt(notes / 100);
let rest100= notes%100;

let notes50 = parseInt(rest100 / 50);
let rest50= rest100%50;

let notes20 = parseInt(rest50 / 20);
let rest20= rest50%20;

let notes10 = parseInt(rest20 / 10);
let rest10= rest20%10;

let notes5 = parseInt(rest10 / 5);
let rest5= rest10%10;

let notes2 = parseInt(rest5 / 10);
let rest2= rest5 % 10;

let notes1 = parseInt(rest2 / 10);

console.log(`${notes100} nota(s) de R$ 100,00`)
console.log(`${notes50} nota(s) de R$ 50,00`)
console.log(`${notes20} nota(s) de R$ 20,00`)
console.log(`${notes10} nota(s) de R$ 10,00`)
console.log(`${notes5} nota(s) de R$ 5,00`)
console.log(`${notes2} nota(s) de R$ 2,00`)
console.log(`${notes1} nota(s) de R$ 1,00`)