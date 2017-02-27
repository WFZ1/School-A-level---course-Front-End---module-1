var arr = [], i = 0;

while(true) {
	var num = prompt('Введите элем. массива или нажмите "Отмена"', "");
	if(num === null) break;
	arr[i++] = num;
}