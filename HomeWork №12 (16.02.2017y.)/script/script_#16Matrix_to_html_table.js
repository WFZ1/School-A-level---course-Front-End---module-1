var arr = [], str = "<table border=1>";

for (var i = 1; i < 10; i++) 
{
	arr[i] = [];
	str += "<tr>";

	for (var j = 1; j <= 10; j++) {
		arr[i][j] = i * j;
		str += "<td>" + arr[i][j] + "</td>"
	}

	str += "</tr>";
}

str += "</table>";
document.write(str);