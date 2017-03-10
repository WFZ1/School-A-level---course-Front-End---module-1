function sum() {
	var amount = 0;

	for (var i = 0; i < arguments.length; i++)
		amount += arguments[i];

	console.log(amount);
}

sum(1) // => 1
sum(2) // => 2
sum(10,20,40,100) // => 170