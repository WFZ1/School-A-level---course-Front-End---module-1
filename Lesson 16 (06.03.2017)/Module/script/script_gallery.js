function gallery(id, links) 
{
	var div = $("<div>").attr("id", id).css({
		padding: "10px",
		border: "1px solid gray",
		display: "inline-block",
		margin: "0 10px 10px 0"
	});
	var img = $("<img>").attr("src", links[0]).css({
		display: "block",
		"margin-bottom": "10px"
	});
	var button1 = $("<button>").text("back").css("margin-right", "10px");
	var button2 = $("<button>").text("next");

	div.append(img, button1, button2);
	$("body").append(div);

	$(button1).click(function() {
		$(img).attr("src", links[0]);
	});

	$(button2).click(function() {
		$(img).attr("src", links[1]);
	});
}

gallery("galleryContainer",
	["https://static33.cmtt.ru/paper-media/fd/92/e5/0479e08f8e852d.png",
	"http://s00.yaplakal.com/pics/pics_original/1/9/4/3736491.jpg"]);

gallery("galleryContainer2",
	["https://static33.cmtt.ru/paper-media/fd/92/e5/0479e08f8e852d.png",
	"http://s00.yaplakal.com/pics/pics_original/1/9/4/3736491.jpg"]);