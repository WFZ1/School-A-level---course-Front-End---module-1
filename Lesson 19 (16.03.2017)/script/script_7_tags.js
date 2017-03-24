function Tag() {
	this.getHTML = function() {
		return this;
	}
}

function PairedTag() {
}

function TagA() {
	var link;
	var text;

	this.setHref = function(newlink) {
		if (link != newlink)
			link = newlink;
		return link;
	}
	this.getHref = function() {
		return link;
	}
	this.setText = function(newtext) {
		if (text != newtext)
			text = newtext;
		return text;
	}
	this.getText = function() {
		return text;
	}
}

function TagDiv() {
}

function UnpairedTag() {
}

function TagBr() {
}

function TagInput(attr) {
	for (var key in attr) {
		this[key] = attr[key];
	}
}

TagA.prototype = PairedTag;
TagDiv.prototype = PairedTag;

TagBr.prototype = UnpairedTag;
TagInput.prototype = UnpairedTag;

PairedTag.prototype = Tag;
UnpairedTag.prototype = Tag;

Tag.prototype = 

var t = new Tag();
t.getHTML(); // => "";

var br = new TagBr();
br.getHTML(); // => "<br />"

// var i = new TagInput({'type': "text", placeholder: 'login', value: "", name: "login"});
// // i.getHTML(); // => "<input type='text' placeholder='login' value='' name='login'>

// var google = new TagA();
// google.setHref("http://google.com");
// google.setText("гугл");