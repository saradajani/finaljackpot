a = document.getElementById("slot1");
b = document.getElementById("slot2");
c = document.getElementById("slot3");
var mySound = document.getElementById('mysound');

function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		el.src="images/lemon_slot.PNG";
	} else if (el.src.match("images/lemon_slot.PNG")){
		el.src="images/orange_slot.PNG";
	} else if (el.src.match("images/orange_slot.PNG")){
		el.src="images/watermelon.PNG";
	} else if (el.src.match("images/watermelon.PNG")){
		el.src="images/seven_slot.PNG";
	} else if (el.src.match("images/seven_slot.PNG")){
		el.src="images/bar_slot.PNG";
	} else if (el.src.match("images/bar_slot.PNG")){
		el.src="images/cherry_slot.PNG";
	}
}


function checkImage(el){
	if (a.src.match("images/cherry_slot.PNG") && b.src.match("images/cherry_slot.PNG") && c.src.match("images/cherry_slot.PNG")){
	mysound.play();
	a.classList.add("opaque");
	b.classList.add("opaque");
	c.classList.add("opaque");;
	} else{
		//i wish this function would work when all lights are yellow, or all are red...
	}
}