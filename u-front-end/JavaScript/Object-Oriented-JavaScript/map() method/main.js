

var names  = ['David', 'Richard', 'Veronika'];

//the function that passes to map() gets called for each item in the names array
//the function receives the first name in the array which is 'David' and stores it in the name variable and it returns its length
//and does the same for the remaining elements inside the array
var nameLengths = names.map(function(name){ //name holds the current value
    return name.length; // returns the length of the element
});

console.log(nameLengths); //output - [5, 7, 8]