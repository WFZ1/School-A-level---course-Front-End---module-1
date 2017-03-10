function greetAll() 
{
    // Преобразование arguments в обычный массив
    var args = Array.prototype.slice.call(arguments);
	alert("Hello " + args.join(", "));
}

// Выводит alert "Hello Superman"
greetAll("Superman");
// Выводит alert "Hello Superman, SpiderMan"
greetAll("Superman", "SpiderMan");
// Выводит alert "Hello Superman, SpiderMan, Captain Obvious"
greetAll("Superman", "SpiderMan", "Captain Obvious");