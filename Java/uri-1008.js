var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let employeeNumber = lines.shift();
let workedHours = lines.shift();
let hourlyWage = lines.shift();

let totalSalary = workedHours * hourlyWage;

console.log('NUMBER = ' + employeeNumber);
console.log(`SALARY = U$ ` + totalSalary.toFixed(2));