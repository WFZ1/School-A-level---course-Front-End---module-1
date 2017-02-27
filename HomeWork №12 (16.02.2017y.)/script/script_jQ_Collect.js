var selectors = ["#surname", "#name", "#age", "select#sex"];

$("#save").click(function() {
	var person = { // то, что должно получиться в результате:
		// "#surname": значение поля,
		// "#name": значение поля,
		// "#age": значение поля,
		// "select#sex": значение поля
	}

	for (var i = 0; i < selectors.length; i++) {
		person[selectors[i]] = $(selectors[i]).val();
	}

	alert("Person\n----------\nSurname: " + person["#surname"] + "\nName: " + person["#name"] + "\nAge: " + person["#age"] + "\nSex: " + person["select#sex"]);
});