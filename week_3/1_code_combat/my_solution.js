// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
//------ Rescue Mission -------
 
//Pseudocode
 
// Move up x1
// Move right x2
// Move down x1
// Attack
 
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();
 
//------ Grab The Mushroom -----
 
//Pseudocode
 
// Move up x1 (already coded)
// Move right x1 (get the mushroom)
// Move left x1
// Move up x1 (already coded)
// Attack
 
this.moveUp();
this.moveRight(); 
this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();

//------ Drink Me -----
 
//Pseudocode

//Move right x1
//Attack
//Move right x1
//Move down x1
//Move up x1
//Move right x1
//Attack

//Kill Munchkin #1
this.moveRight();
this.attackNearbyEnemy();

//Grab the health potion
this.moveRight();
this.moveDown();

//Kill Munchkin #2

this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//------ Taunt The Guards -----
 
//Pseudocode

//Get phoebe out of the dungeon

// move right x1
// Ask Phoebe to follow you
// move right x2
// move up x1
// move right x1
// Call the ogres
// move down x1
// move right x1
// move up x1
// move right x1

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight(); 

//------ It's a Trap -----
 
//Pseudocode

// move down x3
// move up x3

this.moveDown();
this.moveDown();
this.moveDown();
this.moveUp();
this.moveUp();
this.moveUp();

//------ Break the Prison -----
 
//Pseudocode

// if he/she is a friend, return true else false

if (name === "William" || name === "Lucas" || name === "Gordon" || name === "Marcus" || name === "Robert")
    return true;
else
    return false; 
return true;

//------ Taunt -----------------
 
//Pseudocode

// Say something different to the ogre 4 times

this.say("Hey there!");
this.say("Hey monster!");
this.say("Hey you!");
this.say("Hey!");

//------ Cowardly Taunt -----------------
 
//Pseudocode

//Attack the two closest ogres
//Get Tharin in ogre's eye by moving him to position 41,20
//Move Tharin back to the safe spot and let the towers kill the ogres

//Attack the rest of the ogres
//Move Tharin to position 40,32
//Call out to the Ogres
//Move Tharin back to the safe spot

this.moveXY(41,20);
this.moveXY(70,10);

this.moveXY(40,32);
this.say("Hey you!");
this.moveXY(70,10);

//------ Commanding Followers ------------
 
//Pseudocode

//Tharin asks the troops to follow him
//Tharin moves to the coordinates (62,43)
//Tharin leads his troops to battle

this.say("Troops, Follow me!");
this.moveXY(62,43);
this.say("Troops, attack!");

//---------- Mobile Artillery ------------
 
//Pseudocode

//move the canon in range with the ogres on the upper left
//attack (killed 2)
//move the canon back to any location and aim at the big ogre
//attack
//repeat the steps above for the ogres on the right

this.moveXY(42, 40);
this.attackXY(51,64);

this.moveXY(48,30);
this.attackXY(48,46);

this.moveXY(48,31);
this.attackXY(67,51);

this.moveXY(46,22);
this.attackXY(61,40);

// Reflection:

// The first few exercises were straight forward and they worked the first time. I had a problem with
// “Break the Prison” exercise. If I put the ogre names to be the enemies and set them to false, the
// code didn’t work. Instead, I set all the friend’s names to true else false and now the code worked.

// I learned that the keyword “this” is a reference variable referencing to the current object where
// I believe that () brackets is how you declare an object. Semicolon in javascript ends the line.

// Overall, I found Code Combat itself to be tedious for I believe there are better resources to
// practice Javascript.
