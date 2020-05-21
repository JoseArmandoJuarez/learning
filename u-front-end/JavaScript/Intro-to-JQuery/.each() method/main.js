
/**
 * Use jQuery's each() method to iterate through the <p>'s,
 * calculate the length of each one, and add each length to the end of each <p>.
 * 
 * Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
 * length numbers won't be correct!
 */


$("p").each(function() {

    var numChar = $(this).text(); //select all whats inside the p tags
    console.log(numChar);
    
    var numLetters = numChar.length;//checks for the numbers of letters in the p tags
    console.log(numLetters);
    
    console.log(numChar + numLetters);
    
    $(this).text( numChar + " [" + numLetters + "]");// display the characters + the number of letters

});



//**********************************************************/
//ANOTHER WAT IT COULD BE DONE ITS BY DOING THE FOLLOWING...
//**********************************************************/
/*
function numberAdder(){

    var text = $(this).text();

    var number = text.length;

    $(this).text(text + " " + number);
}
$('p').each(numberAdder);
*/