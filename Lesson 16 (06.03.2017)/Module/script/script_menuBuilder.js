function menuBuilder(id, links) {
	var ul = $("<ul>");

	for (var i = 0; i < links.length; i++)
	{
	    var keys = Object.keys(links[i]);
		var li = $("<li>");
		var a = $("<a>").text(links[i][keys[0]]).attr("href", links[i][keys[1]]);
		ul.append(li.append(a));
	}

	$("body").append($("#" + id).append(ul));
}

var menu = [
	{
		text: "google",
		href: "http://google.com"
	},
	{
		text: "ebay",
		href: "http://ebay.com"
	},
	{
		text: "ya",
		href: "http://ya.ru"
	}
];

menuBuilder("menuContainer", menu); //построить меню в элементе с id "menuContainer".