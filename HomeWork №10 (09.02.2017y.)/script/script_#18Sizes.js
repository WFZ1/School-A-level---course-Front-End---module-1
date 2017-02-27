var size = +prompt("Введите ваш размер брюков", "");

if (size < 42) {
	alert("S");
}
else if (size < 46) {
	alert("M");
}
else if (size < 50) {
	alert("L");
}
else if (size < 54) {
	alert("XL");
}
else {
	alert("XXL");
}