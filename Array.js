function Location(id,name,description)
{
	this.id = id;
	this.name = name;
	this.description = description;

function tostring()	
{ 
	return(this.id + "" + this.name + "" + this.description); 
}
	locationarray = new Array();

   locationarray.push(new location(0,"cornField","You head into a corn feild trying not to get lost."));
   locationarray.push(new location(1,"cornFarm","You head towards a farm house.  No one is home and there is a sickle on the porch that seems useful."));
   locationarray.push(new location(2,"river","You find yourself at the Susquehana river.  There is a rope swing that seems fun.  Matbe youo should come back later."));
   locationarray.push(new location(3,"amishMan","You run into an Amish man along a dirt road heading west.  You try to ask him for directions but he is speaking dutch and you cannot understand him."));
   locationarray.push(new location(4,"amishTown","You follow the dirt road and find yourself in a Amish town.  The food they are cooking smells great but you do not have your wallet."));
   locationarray.push(new location(5,"forest","You come upon a forest that has thick brush and decide to enter clearing your way with the sickle."));
   locationarray.push(new location(6,"highway","You come across a highway and start following it.  Along the way you discover a skateboard that may help speed up your trip home."));
   locationarray.push(new location(7,"gasStation","You come up to Turkey Hill gas station and see a friend outside. He sees that you are dehydrated and offers you a water."));
   locationarray.push(new location(8,"collegeCampus","You come back to your college campus and while you are walking through you find a pledge with a bacon, egg, and cheese on a roll. He offers you the sandwhich thinking it will benifit him in the future."));
   locationarray.push(new location(9,"fratHouse","Finally, you make it back to the fraternity house and gather all the brothers to hear your tale of bravery."));

}
function items(id,name,description)
{
	this.id = id;
	this.name = name;
	this.description = description;

function tostring()
{
	return(this.id + "" + this.name + "" + this.description);
}
	itemsarray = new Array();

  itemsarray.push(new items(1, "Sickle", "You pick up the sickle."));
  itemsarray.push(new items(6, "Skateboard", "You start to ride the skateboard."));
  itemsarray.push(new items(7, "Water", "You take the water bottle from your friend."));
  itemsarray.push(new items(8, "Food", "You accept the glorious bacon, egg, and cheese on a roll from the pledge"));
}