function Person(name, surname, age, sex, salary, married) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sex = sex;
    this.salary = salary;
    this.married = married;

    var cur_name,
    	cur_surname,
    	cur_age,
    	cur_sex,
    	cur_salary,
    	cur_married;

    this.setName = function(newName) {
    	if (typeof newName === "string")
    		cur_name = newName;

    	return cur_name;
    }

    this.getName = function() {
    	return cur_name;
    }

    this.setSurname = function(newSurname) {
    	if (typeof newSurname === "string")
    		cur_surname = newSurname;

    	return cur_surname;
    }

    this.getSurname = function() {
    	return cur_surname;
    }

    this.setAge = function(newAge) {
    	newAge = +newAge;

        if (Number.isInteger(newAge) && (newAge > 0) && (newAge < 100))
            cur_age = newAge;

        return cur_age;
    }

    this.getAge = function() {
    	return cur_age;
    }

    this.setSex = function(newSex) {
    	if (newSex === "male" || newSex === "female")
    		cur_sex = newSex;

    	return cur_sex;
    }

    this.getSex = function() {
    	return cur_sex;
    }

    this.setSalary = function(newSalary) {
    	if (!isNaN(newSalary) && newSalary > 0)
    		cur_salary = newSalary;

    	return cur_salary;
    }

    this.getSalary = function() {
    	return cur_salary;
    }

    this.setMarried = function(newMarried) {
    	if (newMarried.toLowerCase() === "yes" || newMarried.toLowerCase() === "no")
    		cur_married = newMarried;

    	return cur_married;
    }

    this.getMarried = function() {
    	return cur_married;
    }
}

var person = new Person("Ivan", "Petroff", 32, "male", 5000, "yes");