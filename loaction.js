

function cornField() {
	var desc = "You come back to the corn feild where you woke up.";
	updateDisplay(desc);
	document.getElementById("north").disabled = true;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = true;
    
}

function cornFarm() {
	var desc = "You come to a farm house and check the door.  It is locked and you can hear a dog ferociously growling and barking in the distance.";
	updateDisplay(desc);
	document.getElementById("north").disabled = true;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = false;
}

function river() {
	var desc = "You come to the Susquehana river and realize you are going in the wrong direction to get home.";
	updateDisplay(desc);
	document.getElementById("north").disabled = true;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = false;
}

function amishDude() {
	var desc = "You come across a dirt road with an amish gentleman who only speaks dutch. He gives you directions but you cannot understand him..";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = true;
}

function amishTown() {
	var desc = "You walk into a strange town hoping to get some help you talk to the locals.  Unfortunately they only speak dutch so you get no information.";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = false;
}

function forest() {
	var desc = "You come into a forest and you do not see the end of it.  You might not want to head deeper in.";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = false;
}

function highway() {
	var desc = "You come across a highway and feel you are on the right track to getting home. Cars are whizzing by and no one notices you so you have to continue on foot.";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = true;
}

function gasStation() {
	var desc = "You come across the Turkey Hill gas station. There is an unopened water that you should take because you are dehydrated";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = false;
}

function collegeCampus() {
	var desc = "You cross the campus seeing familiar faces knowing you are nearing your house.";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = false;
}

function fratHouse() {
	var desc = "You have arrived at your house.  You walk up the stairs ignoring everyone and collapse in your bed.  You are safe.";
	updateDisplay(desc);
	document.getElementById("north").disabled = true;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = false;
}