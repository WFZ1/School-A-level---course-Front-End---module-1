$(document).ready(function() {
	// var ctx = canvas.getContext("2d");

	// ctx.moveTo(100, 58);
	// ctx.lineTo(200, 0);
	// ctx.lineTo(300, 58);
	// ctx.lineTo(200, 117);
	// ctx.closePath();
	
	// ctx.fillStyle = "#EA6622";
	// ctx.stroke();
	// ctx.fill();

	debugger;
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var w = canvas.width; // ширина полотна
	var h = w / 4; // вертикальное расстояние между точками
	var s = h / Math.sin(Math.PI / 3); // горизонтальное расстояние между точками
	var l = s / 2; // 
	cs = ["#EA6622",  "#1E98B8", "#63C2CC"]; // цвета
	ctx.translate(w / 2, canvas.height / 2); // 

	for (var i = 0; i < 6; i++) {
	    ctx.beginPath(); // начало рисования нового контура
	    ctx.moveTo(0,-s);
	    ctx.lineTo(-h,-s-l);
	    ctx.lineTo(0,-s-2*l);
	    ctx.lineTo(h,-s-l); 
	    ctx.lineTo(0,-s);
	    ctx.closePath();
	    ctx.stroke();
	    ctx.fillStyle = cs[i%3];
	    ctx.fill();
	    ctx.beginPath();
	    ctx.moveTo(0,0);
	    ctx.lineTo(0,-s);
	    ctx.lineTo(h,-s-l);
	    ctx.lineTo(h,-l);   
	    ctx.lineTo(0,0);
	    ctx.closePath();
	    ctx.stroke();
	    ctx.fillStyle = cs[(i+2)%3];
	    ctx.fill();
	    ctx.rotate(Math.PI / 3);
	}
});