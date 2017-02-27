var arr = prompt("Введите размеры шахматной доски, н-мер: 10х12", "").split('x');
var str = "";

for (var i = 0; i < arr[0]; i++) {
	for (var j = 0; j < arr[1]; j++) {
		str += (i+j) % 2 ? '.' : '#';
	}
	str += "\n";
}

alert(str);