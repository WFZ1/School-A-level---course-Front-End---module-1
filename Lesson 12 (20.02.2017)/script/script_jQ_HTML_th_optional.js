var a = {
	name: "Pasha",
	surname: "Skumenko",
	age: 20,
	fullName: "Skumenko Pasha"
};

var b = {
	name: "Dima",
	surname: "Ivashenko",
	fathername: "Alexandrovich",
	fullName: "Ivashenko Dima Alexandrovich"
};

var c = {
	name: "Olya",
	surname: "Kravchenko",
	sex: "female",
	fullName: "Kravchenko Olya"
};

var d = {
	name: "Vasya",
	surname: "Kinash",
	"zodiac sign": "aries",
	fullName: "Kinash Vasya"
};

var e = {
	name: "John",
	surname: "Travolta",
	fathername: "Joseph"
};

var persons = [a, b, c, d, e];
var head = {};

// Созд. объект с ключами всех person
for (var i = 0; i < persons.length; i++)
	for (var key in persons[i])
		head[key] = undefined;			

var table = $('<table border="1">');
var tr = $("<tr>");

// Строим строку с заглавными данными таблицы
for (var key in head)
    tr.append($("<th>").text(key));

table.append(tr);

// Строим строки с обычными данными таблицы
for (var i = 0; i < persons.length; i++)
{
	var new_tr = $("<tr>");
	
	for (var h_key in head)
	{
	    var flag = true;
	    
		for (var p_key in persons[i])
		{
			if (h_key == p_key) { 
				new_tr.append($("<td>").text(persons[i][p_key]));
				flag = false;
				break;
			}
		}
		
		if (flag) new_tr.append($("<td>"));
	}

	table.append(new_tr);
}

$("body").append(table);