/*Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.*/


var input = require('fs').readFileSync('uriTest', 'utf8');
var lines = input.split('\n');

let [a, b, c] = lines.shift().split(' ');
//to force change from string to Number\\
a *= 1;
b *= 1;
c *= 1;
//////////\\\\\\\\\\\
let rightTriangleArea = a * c / 2;
console.log(`TRIANGULO: ${rightTriangleArea.toFixed(3)}`);

let areaCircle = 3.14159 * c**2;
console.log(`CIRCULO: ${areaCircle.toFixed(3)}`);

let areaTrapeze=(a+b)*c/2
console.log(`TRAPEZIO: ${areaTrapeze.toFixed(3)}`);

let araSquare=b*b;
console.log(`QUADRADO: ${araSquare.toFixed(3)}`);

let rectangleArea=a*b;
console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);
