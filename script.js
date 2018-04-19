var vakInput = document.getElementById("vakInput");
var firstInput = document.getElementById("procentSemester1");
var secondInput = document.getElementById("procentDW2");
var button = document.getElementById("button");
var reset = document.getElementById("reset");
var div = document.querySelector("#resultaat");

function display () {
	if (vakInput.value.length > 0 && firstInput.value.length >0 && secondInput.value.length > 0) {
	var totaal = (firstInput.value * 0.4) + (secondInput.value * 0.24);
	var nodig = (50 - totaal)*2.7777777777777777; 
	var toevoegen = document.createElement("p");
	var tekstnodig = "Je hebt nog "+""+Math.round(nodig * 100) / 100+"% te halen op het examen."
	var verwijderen = document.createElement("button")
	toevoegen.appendChild(document.createTextNode(vakInput.value + ":   " + Math.round(totaal * 100) / 100 +"% heb je nu. "+ tekstnodig));
	div.appendChild(toevoegen);
	div.classList.add("opmaakresultaat", "anderkader");
	/*toevoegen.appendChild(verwijderen);
	verwijderen.appendChild(document.createTextNode("Verwijder"));
	verwijderen.classList.add("verwijdertoets");
	var verwijdertoets = document.querySelector(".verwijdertoets");
	verwijdertoets.addEventListener("click", function verwijderingFunctie () {
	div.removeChild(toevoegen)
});*/
	resetValue();
}
}

function resetValue () {
	firstInput.value="";
	secondInput.value="";
	vakInput.value="";
}

function checkenter() {
	if (event.keyCode===13) {
		display();
	}
}

secondInput.addEventListener("keypress", checkenter);
button.addEventListener("click", display);
reset.addEventListener("click", resetValue);


