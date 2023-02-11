var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let travelTime = lines.shift();
let speed = lines.shift();

let spentFuel = (travelTime * speed)/12;
console.log(spentFuel.toFixed(3));