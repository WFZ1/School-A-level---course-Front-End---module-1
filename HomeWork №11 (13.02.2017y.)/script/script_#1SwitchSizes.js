var size = +prompt("Введите ваш размер брюков", "");

switch(size) {
	case 40: case 41: alert("S");
		break;
	case 42: case 43: case 44: case 45: alert("M");
		break;
	case 46: case 47: case 48: case 49: alert("L");
		break;
	case 50: case 51: case 52: case 53: alert("XL");
		break;
	case 54: alert("XXL");
		break;
	default: alert("Такого размера не существует!");
}