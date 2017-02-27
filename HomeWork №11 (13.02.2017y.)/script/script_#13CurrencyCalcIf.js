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