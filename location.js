//Bryant Gowan
//Game Final Project
//12/7/2017



var score = 5;
var pos = 0;
var north = 0;
var south = 1;
var east = 2;
var west = 3;
var inv = [];

gItems = new Array();

function items(id, name, description)
   {
       this.id = id;
       this.name = name;
	   this.description = description
       this.toString = function () {return(this.id + ", " + this.name + ", " + this.description); };
   }

function Location(id,name,description, item, visited)
{
    this.id = id;
    this.name = name;
    this.description = description;
    this.item = item;
	this.visited = visited
    this.toString = function () {return(this.id + ", " + this.name + ", " + this.description); };
}
 
//initialize items
var item1 = new items(1, "Phone", "You find your phone buried deep in the hay stack.");
var item2 = new items(6, "Watch", "You find your watch glistening in the sun along the highway.");
var item3 = new items(7, "SweatShirt", "You allow the girl to keep your sweatshirt.");
var item4 = new items(8, "Wallet", "You grab your wallet off the table and finally you can rest");
var gItems = new Array();
gItems[1] = item1;
gItems[6] = item2;
gItems[7] = item3;
gItems[9] = item4;

//locations
var l_cornField = new Location(0, "cornField", "You head into a corn feild trying not to get lost.", null, true);
var l_cornFarm = new Location(1, "cornFarm", "You arrive at a farm house.  There is a large haystack next to it.", item1, false);
var l_river = new Location(2, "river", "You find yourself at the Susquehana river.  There is a rope swing that seems fun.  Matbe youo should come back later.", null, false);
var l_amishMan = new Location(3, "amishMan", "You run into an Amish man along a dirt road heading west.  You try to ask him if he has seen your things but he is speaking dutch and you cannot understand him.", null, false);
var l_amishTown = new Location(4, "amishTown", "You follow the dirt road and find yourself in a Amish town.  The food they are cooking smells great but you need to search for your missing things.", null, false);
var l_forest = new Location(5, "forest", "You come upon a forest that has thick brush that seems impassable.", null, false);
var l_highway = new Location(6, "highway", "You come across a highway and start following it.  You can see many shiny items along the road.", item2, false);
var l_gasStation = new Location(7, "gasStation", "You come up to Turkey Hill gas station and see the girl you were with last night wearing your sweatshirt.", item3, false);
var l_collegeCampus = new Location(8, "collegeCampus", "You come back to your college campus and while you are walking through you spot one of your fraternity brothers and he tells you he saw your wallet at the house.", null, false);
var l_fratHouse = new Location(9, "fratHouse", "Finally, you make it back to the frat house and whne you enter you see the glorious sight of your wallet sitting on the kitchen table.", item4, false);

//global location array
var gLocations = [l_cornField, l_cornFarm, l_river, l_amishMan, l_amishTown, l_forest, l_highway, l_gasStation, l_collegeCampus, l_fratHouse,];

          function Command(){
            var inputCommand = document.getElementById("inputCommand").value;
            inputCommand = inputCommand.toUpperCase();
            if (inputCommand == "N") {
                North()
            } else if (inputCommand == "S"){
                South(); 
            } else if (inputCommand == "E"){
                East();
            } else if (inputCommand == "W"){
                West();
            } else if (inputCommand == "S"){
                takeItem();
            } else if (inputCommand == "I"){
                Inventory();	
            } else if (inputCommand == "Rest"){
                rest();				
             } else if (inputCommand == "HELP") {
                var message = "N, S, E, W, S, or I are the only commands. Visit different locations to gain score and you may find some items along the way. Once you find all of your items you can 'rest' at the frat house.";
                 updateDisplay(message);
            } else {
                alert("Only Commands are N, S, E, W, T,or I");
            } 
          }

	function init() {
		var message = "You wake up in the middle of a corn field not knowing where you are. You are missing your phone, wallet, watch, and sweatshirt.";
		 updateDisplay(message);
	}
		
	function updateDisplay(message) {
		var textArea = document.getElementById("taMain");
		textArea.value = message;
	}

var navigationMatrix = [ //N,S,E,W

				/*0*/	[-1,3,1,-1],
				/*1*/	[-1,4,2,0],
				/*2*/	[-1,5,-1,1],
				/*3*/	[0,6,4,-1],
				/*4*/	[1,-1,5,3],
				/*5*/	[2,-1,8,4],
				/*6*/	[3,7,-1,-1],
				/*7*/	[6,8,-1,-1],
				/*8*/	[7,9,-1,-1],
				/*9*/	[8,-1,-1,-1]
				]
				
		//keep track of locations visited
	function move(dir) {
		var newLoc = navigationMatrix[pos][dir];
		if (newLoc == -1) {
			var message = "That area is blocked off.";
			updateDisplay(message);	
		} else {
			pos = newLoc;
			var visit = gLocations[pos];
			if (visit.visited === false) {
				gLocations[pos].visited = true;
				score += 5;
				console.log(pos);
				var message = gLocations[pos].description;
				updateDisplay(message);
				updateScore();
			} else {
				console.log(pos);
				var message = gLocations[pos].description;
				updateDisplay(message);

				}
		}
	}
	
		

	function North() {
		move(north);
	}

	function South() {
		move(south);
	}

	function East() {
		move(east);
	}

	function West() {
		move(west);	
	}

	//update display message
    function updateDisplay(message) {
             var targetTextArea = document.getElementById("taMain");
                 targetTextArea.value = message;
        }

	//update score
    function updateScore() {
             document.getElementById("scoreBox").innerHTML = "Score: " + score;
	}

		function rest() {
		if (pos == 9) {
			if (inv.length == 4) {
				var message = "You can now go to sleep knowing all your things are safe.";
				updateDisplay(message);
			} else if (inv.length != 4) {
				var message = "You need to find the rest of your missing stuff before you sleep";
				updateDisplay(message);
			} else {
				var message = "You can't rest without even trying to look";
				updateDisplay(message);
			}
		} else {
			var message = "There's nothing to unlock.";
			updateDisplay(message);
		}
	}