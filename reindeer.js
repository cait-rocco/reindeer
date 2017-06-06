var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var loopCount = 8;

var hohohoElement = document.getElementById("reindeer");

for (var i = 0; i < loopCount; i++) {
	hohohoElement.innerHTML += colors[i] + " " + reindeer[i] + "<br>";
}