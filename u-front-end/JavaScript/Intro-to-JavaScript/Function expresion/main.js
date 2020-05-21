/**
 * Write an anonymous function expression that stores 
 * a function in a variable called "laugh" and outputs 
 * the number of "ha"s that you pass in as an argument.
 * 
 * use laugh(3);
 */

var laugh = function(num){ //also as saying -> function laugh(num){}
    
    var string=""; 
    
    for (var i = 0; i < num; i++) {
        string += "ha";    
    }

    return string + "!"; 
}

console.log(laugh(10));