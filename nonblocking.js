// link to the fileSystem module FS

var fs = require('fs');

// food

console.log('FOOD:  ');

fs.readFile('food.txt', 'utf8', function(err, food){  // second parametr 'food' is a name of outcome data

	if (err) {
		console.log('Error: ' + err);
		return
	}

	console.log(food);
});

// drinks



fs.readFile('drinks.txt', 'utf8', function(err, drinks){ // second parametr 'food' is a name of outcome data
	console.log('\nDRINKS:  '); // if left before console.log(drinks); it will show food in a food but not in a drinks
	console.log(drinks);
});