Object.prototype.copy = function() {
	var box = {};

	for (var key in this) {
		if(this.hasOwnProperty(key)) // вызов this.hasOwnProperty(key) возвращает true, если ключ принадлежит this, иначе false.
			box[key] = this[key];
	}

	return box;
};

var a = { year: 1999, month: 11 };
var b = a.copy();

b.year = 2017;
console.log(b) // Object {year: 2017, month: 11}
console.log(a) // Object {year: 1999, month: 11}