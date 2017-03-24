function arithmetic(first, diff, n) { // first - Первый элем., diff - Разность, n - Кол. элем.
    if (n == 1) return first;
    return first + arithmetic(first + diff, diff, n - 1);
}

function arithmeticEasy(num) {
	if (num == 1) return 1;
  	return num + arithmeticEasy(num - 1);
}

console.log(arithmetic(1, 2, 10)); // сумма элем. ариф. прог. должно выйти - 100
console.log(arithmetic(7, 5, 19)); // сумма элем. ариф. прог. должно выйти - 988

console.log(arithmeticEasy(10)); // сумма элем. ариф. прог. должно выйти - 55
console.log(arithmeticEasy(100)); // сумма элем. ариф. прог. должно выйти - 5050