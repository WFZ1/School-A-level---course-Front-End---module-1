function inputPerson() {
	return {
		surname: prompt("Enter your surname:",''),
		name: prompt("Enter your name:",''),
		middleName: prompt("Enter your middle name:",'')
	};
};

var persons = [inputPerson(), inputPerson(), inputPerson()];