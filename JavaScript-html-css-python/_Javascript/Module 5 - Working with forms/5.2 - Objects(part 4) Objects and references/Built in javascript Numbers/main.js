
//The Number class can be used to transform strings into numbers, 
//but it is recommended that you use parseInt or parseFloat instead.

var n = Number('3.1416');

console.log(n);
//displays:   3.1416
 
console.log(typeof n);
//displays:  "number"
 
var n = parseInt('3.1416'); // convert a string to an integer number

console.log(n); //only takes the first decimal in the string
//displays: 3
 

//To display the full number use parseFloat
var n = parseFloat('3.1416'); // convert a string to a float number

console.log(n);
//displyas:    3.1416



//Retruns the largest number posible in javascript
console.log(Number.MAX_VALUE); //1.7976931348623157e+308

//Returns the smallest number possible in javascript
console.log(Number.MIN_VALUE); //5e-324





//Methods useful for converting numbers: toFixed(), toExponential(), toString()

//toFixed: sets the number of digits for the decimal part of a number. 
//There is also another method, named toPrecision, that has a very close 
//behavior, and can also return numbers in scientific notation. 

//toExponential: force a number to use a scientific notation.
//For example var a=1000; a.toExponential(); console.log(a); will give 1e+3


//USINBG .toFixed
var n = 123.456;
 
console.log(n.toFixed(1)); // sets the number of digits for the decimal part of the number
//output: "123.5"
  
console.log(n.toFixed(1));
//output:  "123.5"
 
console.log(n.toExponential());
//output:   "1.23456e+2"
 


//INSTEAD OF USING .toFixed() CAN ALSO USE .toPrecision()

var numObj = 5.123456;

console.log(numObj.toPrecision());   //logs '5.123456'
console.log(numObj.toPrecision(5));  //logs '5.12345'
console.log(numObj.toPrecision(2));  //logs '5.1'
console.log(numObj.toPrecision(1));  //logs '5'




//USING .toString
var n = 255;
 
console.log(n.toString());
//output: "255"
 
console.log(n.toString(10));
//output:  "255"
 
console.log(n.toString(16));
//output:  "ff"
 
console.log((3).toString(2));
//output:  "11"
 
console.log((3).toString(10));
//output:   "3"