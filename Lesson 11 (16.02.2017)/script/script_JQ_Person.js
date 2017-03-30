$("#save").click(function() {
	var person = {
		surname: $("#surname").val(),
		name: $("#name").val(),
		age: $("#age").val()
	};

	alert("Person\n----------\nSurname: " + person.surname + "\nName: " + person.name + "\nAge: " + person.age);
});