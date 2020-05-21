/*
To help solve this mystery, write a combination of conditional statements that:

sets the value of weapon based on the room and
sets the value of solved to true if the value of room matches the suspect's room
Afterwards, use this template to print a message to the console if the mystery was solved:

__________ did it in the __________ with the __________!

What goes into the three blank spaces? 
You can fill in the blanks with the name of the suspect,
the room, and the weapon! For example, an output string may look like:

Mr. Parkes did it in the dining room with the knife!
*/

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    var weapon = "poison";
    var solved = true;
} 
else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    var weapon = "trophy";
    var solved = true;
    
} 
else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    var weapon = "pool stick";
    var solved = true;

} 
else if(room === "dining room" && suspect === "Mr. Parkes") {
    var weapon = "knife";
    var solved = true;
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
