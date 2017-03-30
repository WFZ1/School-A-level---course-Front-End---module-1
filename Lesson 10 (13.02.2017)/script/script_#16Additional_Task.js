var choice = +prompt("Введите цифру задания:\n1) switch: sizes\n2) switch: if\n3) prompt: or\n4) confirm: or this days\n5) confirm: if this days\n6) triple prompt 7) default: or\n8) default: if\n9) login and password\n10) currency calc 11) currency calc: improved 12) currency calc: two rates\n13) currency calc: if\n14) scissors\n15) Задание на синий пояс\n16) Дополнительное задание(работает)\n17) Задание на черный пояс", "");

switch(choice) {
	case 1: 
		var size = +prompt("Введите ваш размер брюков", "");
		switch(size) {
			case 40: case 41: alert("S");
				break;
			case 42: case 43: case 44: case 45: alert("M");
				break;
			case 46: case 47: case 48: case 49: alert("L");
				break;
			case 50: case 51: case 52: case 53: alert("XL");
				break;
			case 54: alert("XXL");
				break;
			default: alert("Такого размера не существует!");
		}
		break;
	case 2:
		var color = prompt("Введите цвет","");

		if (color === "red") {
			document.write("<div style='background-color: red;'>красный</div>");
			document.write("<div style='background-color: black; color: white;'>черный</div>");
		}
		else if (color === "black") {
			document.write("<div style='background-color: black; color: white;'>черный</div>");
		}
		else if (color === "blue") {
			document.write("<div style='background-color: blue;'>синий</div>");
			document.write("<div style='background-color: green;'>зеленый</div>");
		}
		else if (color === "green") {
			document.write("<div style='background-color: green;'>зеленый</div>");
		}
		else {
			document.write("<div style='background-color: gray;'>Я не понял</div>");
		}
		break;
	case 3:
		var age = prompt("How old are you?", '') || alert("Error");
		if(age) alert("Born in " + (2017 - age));
		break;
	case 4:
		confirm("Шопинг?", "") || alert("Ты - бяка");
		break;
	case 5:
		if( !confirm("Шопинг?", "") ) {
			alert("Ты - бяка");
		}
		break;
	case 6: case 7:
		var surname = prompt("Введите свою фамилию:", "") || "Skumenko";
		var name = prompt("Введите свое имя:", "") || "Pavel";
		var middleName = prompt("Введите своё отчество", "") || "Sergeevich";
		alert(surname + " " + name + " " + middleName);
		break;
	case 8:
		var surname = prompt("Введите свою фамилию:", "");
		if(surname);
		else surname = "Skumenko";

		var name = prompt("Введите свое имя:", "");
		if(name);
		else name = "Pavel";

		var middleName = prompt("Введите своё отчество", "");
		if(middleName);
		else middleName = "Sergeevich";

		alert(surname + " " + name + " " + middleName);
		break;
	case 9:
		if( prompt("Введите свой логин", "") == "admin" ) {
			if( prompt("Введите свой пароль", "") == "qwerty" ) {
				alert("Поздравляем! Вы успешно прошли авторизацию!");
			}
			else {
				alert("Error: Неверный Пароль!");
			}
		}
		else {
			alert("Error: Неверный Логин!");
		}
		break;
	case 10: case 11: case 12:
		var currency = prompt('Какая валюта: "usd" или "eur"', "").toLowerCase();
		var purchase, selling;

		switch(currency) {
			case "usd": purchase = +27.38;
						selling = +27.00;
				break; 
			case "eur": purchase = +29.14;
						selling = +28.48;
				break;
			default: alert("Error");
		}

		var amount = prompt("Введите сумму", "");
		amount *= confirm("Я хочу: продать/купить") ? selling : purchase; 
		alert(currency + ": " + amount);
		break;
	case 13:
		var currency = prompt('Какая валюта: "usd" или "eur"', "").toLowerCase();
		var purchase, selling;

		if(currency === "usd") {
			purchase = +27.38;
			selling = +27.00;
		}
		else if(currency === "eur") {
			purchase = +29.14;
			selling = +28.48;
		}
		else {
			alert("Error");
		}

		var amount = prompt("Введите сумму", "");
		amount *= confirm("Я хочу: продать/купить") ? selling : purchase; 
		alert(currency + ": " + amount);
		break;
	case 14:
		var userChoice = prompt("Что выбираете, камень, ножницы или бумагу", "").toLowerCase() || "ножницы";
		var computerChoice = Math.random();

		if (computerChoice < 0.34) {
		    computerChoice = "камень";
		} else if(computerChoice <= 0.67) {
		    computerChoice = "ножницы";
		} else {
		    computerChoice = "бумага";
		}

		alert(userChoice + " vs " + computerChoice);

		if(userChoice == computerChoice) alert("Ничья!");
		else if( (userChoice == "камень" && computerChoice == "ножницы") || (userChoice == "ножницы" && computerChoice == "бумага") || (userChoice == "бумага" && computerChoice == "камень")) alert("Ты выиграл!");
		else alert("Ты проиграл!");
		break;
	case 15:
		var ratios = {
		    usd_pur: 27.38,
		    usd_sel: 27,
		    eur_pur: 29.14,
		    eur_sel: 28.48
		}

		var currency = prompt('Какая валюта: "usd" или "eur"', "").toLowerCase();
		var amount = prompt("Введите сумму", "");

		switch(currency) {
			case "usd": alert(currency + ": " + amount * (confirm("Я хочу: продать/купить") ? ratios['usd_sel'] : ratios['usd_pur']));
				break; 
			case "eur": alert(currency + ": " + amount * (confirm("Я хочу: продать/купить") ? ratios['eur_sel'] : ratios['eur_pur']));
				break;
			default: alert("Error");
		}
		break;
	case 16:
		alert("Оно работает в данный момент!");
		break;
	case 17:
		break;
	default: alert("Такого задания не существует!");
}