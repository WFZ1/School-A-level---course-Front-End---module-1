function makeProfileTimer() {
	var t = performance.now();
	return function() { return (performance.now() - t).toFixed() * 1000; } // умножение на 1000, для вывода в микросекундах 
}

function doSomething() {
	for (var i = 0; i < 1000000000; i++);
}

var timer = makeProfileTimer();
doSomething();  //некий код, время выполнения которого мы хотим измерить с высокой точностью
alert(timer()); //alert должен вывести время в микросекундах от выполнения makeProfileTimer до момента вызова timer(), 
                // т. е. измерить время выполнения doSomething