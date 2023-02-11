var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let [x1, y1] = lines.shift().split(' ');
let [x2, y2] = lines.shift().split(' ');


let distance = Math.sqrt(((x2 - x1)**2 + (y2 - y1)**2),2);
console.log(distance.toFixed(4));