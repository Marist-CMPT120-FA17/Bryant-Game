gItems = new Array();

function items(id, name, description)
   {
       this.id = id;
       this.name = name;
       this.description = description;
       this.toString = function () {return(this.id + "" + this.name + "" + this.description); };
   }

function Location(id,name,description, item)
{
    this.id = id;
    this.name = name;
    this.description = description;
    this.item = item;
    this.toString = function () {return(this.id + "" + this.name + "" + this.description); };
}
 
//initialize items
var item1 = new items(1, "Sickle", "You pick up the sickle.");
var item2 = new items(6, "Skateboard", "You start to ride the skateboard.");
var item3 = new items(7, "Water", "You take the water bottle from your friend.");
var item4 = new items(8, "Food", "You accept the glorious bacon, egg, and cheese on a roll from the pledge");

//locations
var l_cornField = new Location(0, "cornField", "You head into a corn feild trying not to get lost.");
var l_cornFarm = new Location(1, "cornFarm", "You head towards a farm house.  No one is home and there is a sickle on the porch that seems useful.", item1);
var l_river = new Location(2, "river", "You find yourself at the Susquehana river.  There is a rope swing that seems fun.  Matbe youo should come back later.");
var l_amishMan = new Location(3, "amishMan", "You run into an Amish man along a dirt road heading west.  You try to ask him for directions but he is speaking dutch and you cannot understand him.");
var l_amishTown = new Location(4, "amishTown", "You follow the dirt road and find yourself in a Amish town.  The food they are cooking smells great but you do not have your wallet.");
var l_forest = new Location(5, "forest", "You come upon a forest that has thick brush and decide to enter clearing your way with the sickle.");
var l_highway = new Location(6, "highway", "You come across a highway and start following it.  Along the way you discover a skateboard that may help speed up your trip home.", item2);
var l_gasStation = new Location(7, "gasStation", "You come up to Turkey Hill gas station and see a friend outside. He sees that you are dehydrated and offers you a water.", item3);
var l_collegeCampus = new Location(8, "collegeCampus", "You come back to your college campus and while you are walking through you find a pledge with a bacon, egg, and cheese on a roll. He offers you the sandwhich thinking it will benifit him in the future.", item4);
var l_fratHouse = new Location(9, "fratHouse", "Finally, you make it back to the fraternity house and gather all the brothers to hear your tale of bravery.");

//global location array
var gLocations = [l_cornField, l_cornFarm, l_river, l_amishMan, l_amishTown, l_forest, l_highway, l_gasStation, l_collegeCampus, l_fratHouse];



function cornField() { 
  if (Loc0 == false) {
    Loc0 = true;
    uscore += 5;
    updateScore();
  }

  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = true;
}  

function cornFarm() {
    if (Loc1== false) {
    Loc1 = true;
    uscore += 5;
    updateScore();
 }

  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}

function river() {
  if (Loc2 == false) {
    Loc2 = true;
    uscore += 5;
    updateScore();  
 }

  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = true;
  document.getElementById("West").disabled = false;
}

function amishMan() {
  if (Loc3 == false) {
    Loc3 = true;
    uscore += 5;
    updateScore();
}

  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = true;

}

function amishTown() {
  if (Loc4 == false) {
    Loc4 = true;
    uscore += 5;
    updateScore();
}

  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}

function forest() {
  if (Loc5 == false) {
    Loc5 = true;
    uscore += 5;
    updateScore();  
}

  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = false;
  document.getElementById("East").disabled = true;
  document.getElementById("West").disabled = false;
}

function highway() {
  if (Loc6 == false) {
    Loc6 = true;
    uscore += 5;
    updateScore(); 
}

  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = true;
}

function gasStation() {
   if (Loc7 == false) {
    Loc7 = true;
    uscore += 5;
    updateScore();
}

  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}

function collegeCampus() {
  if (Loc8 == false) {
    Loc8 = true;
    uscore += 5;
    updateScore();
}

  document.getElementById("North").disabled = false;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = false;
  document.getElementById("West").disabled = false;
}

function fratHouse() {
  if (Loc9 == false) {
    Loc9 = true;
    uscore += 5;
    updateScore();
}

  document.getElementById("North").disabled = true;
  document.getElementById("South").disabled = true;
  document.getElementById("East").disabled = true;
  document.getElementById("West").disabled = false;
}
