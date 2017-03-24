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
    	cur_married,
        cur_father = {},
        children = [];

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
    	if (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
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
    	if (newMarried === true || newMarried === false)
    		cur_married = newMarried;

    	return cur_married;
    }

    this.getMarried = function() {
    	return cur_married;
    }

    this.setFather = function(father) {
        if (typeof father === "object")
            cur_father = father;

        return cur_father;
    }

    this.getFather = function() {
        return cur_father;
    }

    this.getFatherName = function() {
        return (this.sex == "male") ? cur_father.name + "ovich" : cur_father.name + "ovna";
    }

    this.addChild = function(child) {
        if (this.age > (child.age + 15) && children.indexOf(child) == -1)
            children.push(child);

        return children.length;
    }
}

var father1  = new Person("Ivan", "Petrov", 50, "male", 100500, true);
var daughter = new Person("Maria", "Petrova", 25, "female", 500, false);

var father2  = new Person("iPhone", "Sedmoy", 45, "male", 500, true);
var son      = new Person("Ivan", "Sedmoy", 20, "male", 200, false);

daughter.setFather(father1);
console.log(daughter.getFatherName()); // => "Ivanovna"

son.setFather(father2);
console.log(son.getFatherName()); // => "iPhoneovich"

console.log("Количество детей у " + father1.name + " " + father1.surname + ": " + father1.addChild(daughter));
console.log("Количество детей у " + father2.name + " " + father2.surname + ": " + father2.addChild(son));

var son2     = new Person("Grigoriy", "Shevchenko", 32, "male", 2000, false);
var son3     = new Person("Dmitriy", "Shevchenko", 26, "male", 10000, true);
console.log("Количество детей у " + father2.name + " " + father2.surname + ": " + father2.addChild(son2)); // проверка на возраст
console.log("Количество детей у " + father2.name + " " + father2.surname + ": " + father2.addChild(son3));
console.log("Количество детей у " + father2.name + " " + father2.surname + ": " + father2.addChild(son)); // проверка на дублирование детей