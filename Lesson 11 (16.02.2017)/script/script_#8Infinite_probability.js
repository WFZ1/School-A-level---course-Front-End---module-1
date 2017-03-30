var i = 1;

while(i++) {
	if(Math.random() > 0.9) {
		alert("Количество итераций: " + (i-1));
		break;
	}
}