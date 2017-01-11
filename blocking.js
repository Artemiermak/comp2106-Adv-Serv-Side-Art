// link to the fileSystem module FS

var fs = require('fs');

// print food
console.log('FOOD: ');

// using blocking code: when use readFileSync method nothing happend until we run and print it out

var food = fs.readFileSync('food.txt', 'utf8');
console.log(food);

// drinks
console.log('\nDRINKS: ');

var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);