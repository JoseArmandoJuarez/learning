/**
 * Call the emotions() function so that it prints the output you see below, 
 * but instead of passing the laugh() as an argument, pass an inline function expression instead.
 * 
 * Tip : emotions("happy", laugh(2));
 */


// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression


//"happy" is passed to myString, the inline function is passed to myFunc 
emotions ("happy", function laugh(num){ 
   
   var string = "";
   
   for(var i = 0; i < num; i++){
       string = string += "ha";
   }
   
   return string + "!";
   
});