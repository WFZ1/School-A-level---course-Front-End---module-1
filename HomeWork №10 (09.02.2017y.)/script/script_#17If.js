var age = +prompt("Сколько вам лет?", "");

 if(age < 1) {
 	alert("Вы ввели ноль или отрицательное значение!");
}
else {
	if (age < 18) {
    	alert("школьник");
	}
	else {
		if (age < 30) {
	    	alert("молодеж");
		}
		else { 
			if (age < 45) {
		    	alert("зрелость");
			}
			else {
				if (age < 60) {
			    	alert("закат");
				}
				else {
					if (age >= 60) {
				    	alert("как пенсия?");
					}
					else {
					    alert("то ли киборг, то ли ошибка"); 
					}
				}
			}
		}
	}
}