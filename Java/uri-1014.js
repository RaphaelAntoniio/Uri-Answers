var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let travelledDistance = parseFloat(lines.shift());
let spentFuel = parseFloat(lines.shift());

let kmL = travelledDistance/spentFuel;

console.log(`${kmL.toFixed(3)} km/l`)