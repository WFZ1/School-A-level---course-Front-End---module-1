$("#save").click(function() {
	var a = {
		name: $("#name1").val(),
		surname: $("#surname1").val(),
		age: $("#age").val(),
		fullName: $("#fullName1").val()
	};

	var b = {
		name: $("#name2").val(),
		surname: $("#surname2").val(),
		fathername: $("#fathername1").val(),
		fullName: $("#fullName2").val()
	};

	var c = {
		name: $("#name3").val(),
		surname: $("#surname3").val(),
		sex: $("#female").prop("checked") ? $("#female").val() : $("#male").val(),
		fullName: $("#fullName3").val()
	};

	var d = {
		name: $("#name4").val(),
		surname: $("#surname4").val(),
		"zodiac sign": $("#zodiacSign").val(),
		fullName: $("#fullName4").val()
	};

	var e = {
		name: $("#name5").val(),
		surname: $("#surname5").val(),
		fathername: $("#fathername2").val()
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
});