var sum = 0, n = prompt("Enter n:", "");

for(var i = 1; i < n; i+=3) {
	sum += i;
}

alert("Сумма арифметической прогрессии: " + sum);