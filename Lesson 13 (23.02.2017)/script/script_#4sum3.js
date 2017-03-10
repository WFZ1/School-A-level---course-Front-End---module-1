function sum3(a, b, c) 
{
	c = c || 0;
	console.log(a + b +c);
}

sum3(1,2,3) // => 6
sum3(5,10,100500) // => 100515
sum3(5,10) // => 15