function makeCounter() {
	var counter = 0;
	return function() { return console.log(++counter); }
}

var counter   = makeCounter();
var otherCntr = makeCounter();

counter(); // 1
counter(); // 2

otherCntr(); // 1
otherCntr(); // 2
otherCntr(); // 3

counter(); // 3