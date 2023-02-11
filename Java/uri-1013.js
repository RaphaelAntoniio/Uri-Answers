var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let[numberOne, numberTwo, numberThree] = lines.shift().split(' ');
numberOne *=1;
numberTwo *=1;
numberThree *=1;

let biggerOneTwo= (numberOne + numberTwo + Math.abs(numberOne - numberTwo))/2;
let biggertrhee= (numberThree + biggerOneTwo + Math.abs(biggerOneTwo - numberThree))/2;

 console.log (`${biggertrhee} eh o maior`);