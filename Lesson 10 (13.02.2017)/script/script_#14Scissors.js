var userChoice = prompt("Что выбираете, камень, ножницы или бумагу", "").toLowerCase() || "ножницы";
var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "камень";
} else if(computerChoice <= 0.67) {
    computerChoice = "ножницы";
} else {
    computerChoice = "бумага";
}

alert(userChoice + " vs " + computerChoice);

if(userChoice == computerChoice) alert("Ничья!");
else if( (userChoice == "камень" && computerChoice == "ножницы") || (userChoice == "ножницы" && computerChoice == "бумага") || (userChoice == "бумага" && computerChoice == "камень")) alert("Ты выиграл!");
else alert("Ты проиграл!");