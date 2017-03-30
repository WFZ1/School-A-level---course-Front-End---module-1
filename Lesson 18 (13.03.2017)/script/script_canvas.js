var canvas = document.getElementById("canvas");
var ctx    = canvas.getContext("2d"); // создали контекст 2D рисования
var color  = document.getElementById('color');

var circles = [];

function Circle(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;

    var r = 10;

    this.draw = function() {
        ctx.beginPath(); // начало рисования новой фигуры
        ctx.arc(this.x, this.y, r, 0, 2 * Math.PI);
        ctx.fillStyle = this.color; // задает цвет заливки фигур
        ctx.fill(); // заливает фигуру
    }

    this.getR = function() {
        return r;
    }

    this.setR = function(newR) {
        if (newR !== r) {
            r = newR;
            this.draw();
        }
        return r;
    }

    circles.push(this);
}

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect(); // возвращает координаты верхнего левого угла полотна
    return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

canvas.onmousemove = function(evt) {
    if (evt.buttons) // buttons == 1, если был клик любой кнопкой мыши
    {
        var pos = getMousePos(canvas, evt);
        var circle = new Circle(pos.x, pos.y, color.value);
        circle.draw();
    }
}

document.getElementById('+').onclick = function()
{
    ctx.clearRect(0, 0, 400, 400); // очищает полотно

    for (var i = 0; i < circles.length; i++)
        circles[i].setR(circles[i].getR() + 1);
}

document.getElementById('clear').onclick = function()
{
	ctx.clearRect(0, 0, 400, 400);
	circles = [];
}

color.onchange = function(evt)
{
	for (var i = 0; i < circles.length; i++) 
    {
        circles[i].color = this.value;
    	circles[i].draw();
    }
}