function avg() {
	var amount = 0, i;

	for (i = 0; i < arguments.length; i++)
		amount += arguments[i];

	console.log(amount / i);
}

avg(1) // => 1
avg(2) // => 2
avg(10,20,40,100) // => 42.5