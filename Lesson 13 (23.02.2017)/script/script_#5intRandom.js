function intRandom(min, max)
{
	if(arguments.length == 1) {
		max = min;
		min = 0;
	}

	var res = min + Math.random() * (max - min + 1);
  	res = Math.floor(res);
  	console.log(res);
}

intRandom(2, 15) // возвращает целое случайное число от 2 до 15 (включительно)
intRandom(-1, -1) // вернет -1
intRandom(0, 1) // вернет 0 или 1
intRandom(10) // вернет 0 до 10 включительно