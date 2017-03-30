var floor = +prompt("Введите количество этажей в доме:", "");
var apartment = +prompt("Введите количество квартир на этаже:", "");
var number = +prompt("Введите номер квартиры:", "");

var numApartment = floor * apartment; // кол. квартир в подъезде
var numEntrance = Math.ceil(number / numApartment); // номер подъезда
alert("Подъезд №" + numEntrance);
alert( "Этаж №" + Math.ceil( (number - numApartment * (numEntrance - 1) ) / apartment) );