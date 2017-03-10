//************************_1_a_************************

function a(str) {
    alert(str);
}

function aTask() {
	a("Привет!") // вызывает alert("Привет!")
}

//************************_2_cube_************************

function cube(num) {
	console.log(Math.pow(num, 3));
}

function cubeTask() {
	cube(1) // возвращает 1
	cube(2) // возвращает 8
	cube(3) // возвращает 27
}

//************************_3_avg2_************************

function avg2(a, b) {
	console.log((a + b) / 2);
}

function avg2Task() {
	avg2(1,2) // возвращает 1.5
	avg2(10,5) // возвращает 7.5
}

//************************_4_sum3_************************

function sum3(a, b, c) 
{
	c = c || 0;
	console.log(a + b +c);
}

function sum3Task() {
	sum3(1,2,3) // => 6
	sum3(5,10,100500) // => 100515
	sum3(5,10) // => 15
}

//************************_5_intRandom_************************

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

function intRandomTask() {
	intRandom(2, 15) // возвращает целое случайное число от 2 до 15 (включительно)
	intRandom(-1, -1) // вернет -1
	intRandom(0, 1) // вернет 0 или 1
	intRandom(10) // вернет 0 до 10 включительно
}

//************************_6_greetAll_************************

function greetAll() 
{
    // Преобразование arguments в обычный массив
    var args = Array.prototype.slice.call(arguments);
	alert("Hello " + args.join(", "));
}

function greetAllTask() {
	// Выводит alert "Hello Superman"
	greetAll("Superman");
	// Выводит alert "Hello Superman, SpiderMan"
	greetAll("Superman", "SpiderMan");
	// Выводит alert "Hello Superman, SpiderMan, Captain Obvious"
	greetAll("Superman", "SpiderMan", "Captain Obvious");
}

//************************_7_sum_************************

function sum() {
	var amount = 0;

	for (var i = 0; i < arguments.length; i++)
		amount += arguments[i];

	console.log(amount);
}

function sumTask() {
	sum(1) // => 1
	sum(2) // => 2
	sum(10,20,40,100) // => 170
}

//************************_8_avg_************************

function avg() {
	var amount = 0, i;

	for (i = 0; i < arguments.length; i++)
		amount += arguments[i];

	console.log(amount / i);
}

function avgTask() {
	avg(1) // => 1
	avg(2) // => 2
	avg(10,20,40,100) // => 42.5
}

//************************_9_Union_************************

var task = prompt("Введите название задания:\n 1. a\n 2. cube\n 3. avg2\n 4. sum3\n 5. intRandom\n 6. greetAll\n 7. sum\n 8. avg");

switch (task.toLowerCase())
{
    case "a": aTask();
        break;
    case "cube": cubeTask();
        break;
    case "avg2": avg2Task();
        break;
    case "sum3": sum3Task();
        break;
    case "intrandom": intRandomTask();
        break;
    case "greetall": greetAllTask();
        break;
    case "sum": sumTask();
        break;
    case "avg": avgTask();
        break;
    default: alert("Error: Некорректный ввод!");
}