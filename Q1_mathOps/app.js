
// Import our own module
const math = require('./mathOps');

// Import third-party package
const _ = require('lodash');

let a = 20;
let b = 10;

console.log("Addition:", math.add(a, b));
console.log("Subtraction:", math.subtract(a, b));
console.log("Multiplication:", math.multiply(a, b));
console.log("Division:", math.divide(a, b));

// Using Lodash package
let numbers = [10, 20, 30, 40, 50];

console.log("First Element:", _.first(numbers));
console.log("Last Element:", _.last(numbers));
console.log("Sum:", _.sum(numbers));
