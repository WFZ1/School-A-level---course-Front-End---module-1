function makeSaver(rand) {
	var res;

	return function() {	
		if (typeof res === "undefined")
			res = rand();
		return res;
	}
}

var saver = makeSaver(Math.random); // создает функцию-хранилище результата переданной в качестве параметра функции (Math.random 
                                    // в примере). На этом этапе Math.random НЕ вызывается
var value1 = saver();               // saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
var value2 = saver();               // saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную 
                                    // в makeSaver функцию;
console.log(value1 === value2);     // всегда true