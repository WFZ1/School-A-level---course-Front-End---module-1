var arr = [], str = "";

for (var i = 1; i < 10; i++) 
{
	arr[i] = [];

	for (var j = 1; j <= 10; j++) {
		arr[i][j] = i * j;
		str += arr[i][j] + " "
	}

	str += "\n";
}

alert(str);