var person = {
    name: "Pasha",
    age: +prompt("Сколько вам лет?",''),

    getAgeCategory: function() {
    	if (this.age < 1)
		 	return "Вы ввели ноль или отрицательное значение!";
		else if (this.age < 18)
		    return "школьник";
		else if (this.age < 30)
			return "молодеж";
		else if (this.age < 45)
			return "зрелость";
		else if (this.age < 60)
			return "закат";
		else if (this.age >= 60)
			return "как пенсия?";
		else return "то ли киборг, то ли ошибка"; 
    }
}

alert(person.getAgeCategory());