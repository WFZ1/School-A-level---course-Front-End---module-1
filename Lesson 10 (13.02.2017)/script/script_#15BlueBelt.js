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