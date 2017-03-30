// #1 3 persons
// #2 different fields

var a = {
	name: "Pasha",
	surname: "Skumenko",
	age: 20
};

var b = {
	name: "Dima",
	surname: "Ivashenko",
	fathername: "Alexandrovich"
};

var c = {
	name: "Olya",
	surname: "Kravchenko",
	sex: "female"
};

// #3 fields check
if("name" in a) alert("name");
if("surname" in a) alert("surname");
if("age" in a) alert("age");

if("name" in b) alert("name");
if("surname" in b) alert("surname");
if("fathername" in b) alert("fathername");

if(typeof c.name != "undefined") alert("name");
if(typeof c.surname != "undefined") alert("surname");
if(typeof c.sex != "undefined") alert("sex");

// #4 array of persons
var persons = [a, b, c, { name: "Vasya", surname: "Kinash", "zodiac sign": "aries" }];

// #5 loop of persons

for (var i = 0; i < persons.length; i++) {
	console.log(persons[i]);
}

// #6 loop of fields loop of persons

for (var i = 0; i < persons.length; i++) 
{
	for (var key in persons[i]) 
	{
		if(key == "name" || key == "surname") 
			console.log(key + ": " + persons[i][key]);
	}
}

// #7 Loop of loop of keys

for (var i = 0; i < persons.length; i++) 
{
	for (var j = 0; j < Object.keys(persons[i]).length - 1; j++) 
	{
		console.log(Object.keys(persons[i])[j] + ": " + persons[i][Object.keys(persons[i])[j]]);
	}
}

// #8 Loop of loop with optional fields

for (var i = 0; i < persons.length; i++) 
{
	for (var key in persons[i]) 
	{
		if(key == "name" || key == "surname") 
			console.log(key + ": " + persons[i][key]);
		else alert(key + ": " + persons[i][key]);
	}
}

// #9 fullName

for (var i = 0; i < persons.length; i++) 
{
	persons[i].fullName = persons[i].surname + " " + persons[i].name;

	if ("fathername" in persons[i]) {
		persons[i].fullName += " " + persons[i].fathername;
	}

	console.log(Object.keys(persons[i])[3]  + ": " + persons[i].fullName);
}

// #10 serialize

var strJSON = JSON.stringify(persons);

// #11 deserialize

var arr = JSON.parse('{"name": "John", "surname": "Travolta", "fathername": "Joseph"}');
persons.push(arr);

// #12 HTML

var table = '<table border="1">\n<tr> <th> Name </th> <th> Surname </th> </tr>\n';

for (var i = 0; i < persons.length; i++) 
{
	table += "<tr> ";
	var keys = Object.keys(persons[i]);

	for (var j = 0; j < 2; j++) 
		table += "<td> " + persons[i][keys[j]] + " </td>";

	table += " </tr>\n";
}

table += "</table>";
document.write(table);

// #13 HTML optional fields
// #14 HTML tr color

var table_2 = '<table border="1">\n<tr> ';

for (var key in persons[0])
    table_2 += "<th> " + key + " </th>\n";
    
table_2 += " </tr>";

for (var i = 0; i < persons.length; i++) 
{
	table_2 += (i % 2 == 0) ? '<tr bgcolor="#D9D9FF"> ' : "<tr> ";

	for (var key in persons[0]) 
		table_2 += "<td> " + persons[i][key] + " </td>";

	table_2 += " </tr>\n";
}

table_2 += "</table>";
document.write(table_2);

// #15 HTML th optional

var head = {};

// Созд. объект с ключами всех person
for (var i = 0; i < persons.length; i++)
	for (var key in persons[i])
		head[key] = undefined;			

var table_3 = '<table border="1">\n<tr> ';

// Строим строку с заглавными данными таблицы
for (var key in head)
	table_3 += "<th> " + key + " </th>\n";

table_3 += " </tr>\n";

// Строим строки с обычными данными таблицы
for (var i = 0; i < persons.length; i++)
{
	table_3 += "<tr> ";
	
	for (var h_key in head)
	{
	    var flag = true;
	    
		for (var p_key in persons[i])
		{
			if (h_key == p_key) { 
				table_3 += "<td> " + persons[i][p_key] + " </td> ";
				flag = false;
				break;
			}
		}
		
		if (flag) table_3 += "<td></td> ";
	}

	table_3 += " </tr>\n";
}

table_3 += "</table>";
document.write(table_3);