var credentials = {
    login: 'admin',
    password: 'qwerty'
}

var div = document.getElementById('message');

$("#do").click(function() {

	if ($("#login").val() == credentials.login  &&  $("#pass").val() == credentials.password) {
		div.innerHTML = 'Авторизация прошла успешно!';
		div.style.background = 'green';
	}
	else {
		div.innerHTML = 'Неверный логин/пароль!';
		div.style.background = 'red';
	}
});