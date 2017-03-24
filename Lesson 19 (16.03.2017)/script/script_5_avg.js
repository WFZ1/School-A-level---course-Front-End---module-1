Array.prototype.avg = function() 
{
	var sum = 0;

	for (var i = 0; i < this.length; i++) {
		sum += this[i];
	}

	return sum / this.length;
};


[1,2,3].avg(); // => 2
[2,17,31,15,-15].avg(); // => 10