var str = "";

for (var i = 0; i < 6; i++) 
{
	for (var j = 0; j < 11; j++) 
	{
		str += (j >= 5-i && j <= 5+i) ? '#' : '.';
	}

	str += "\n";
}