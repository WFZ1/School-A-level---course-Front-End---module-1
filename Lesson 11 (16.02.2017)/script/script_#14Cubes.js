var arr = [], n = prompt("Введите длину массива: ", '');

for (var i = 0; i < n; i++) {
	arr[i] = Math.pow(i, 3);
}

alert("Кубы индексов: " + arr);