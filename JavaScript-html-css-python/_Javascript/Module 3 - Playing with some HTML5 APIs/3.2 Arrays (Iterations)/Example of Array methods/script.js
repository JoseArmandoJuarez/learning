
//each element has an index, starting at 0
//index        0       1       2         3
//backwards   -4      -3      -2        -1
let myarr = ['red', 'blue', 'yellow', 'purple'];

//each element has an index, starting at 0

//Type in the console
console.log(myarr[0]); //output 'red'

console.log(typeof myarr[0]); //output "object"

console.log(myarr.length); //output 4

console.log(myarr[myarr.length-1]); //output "purple"

console.log(myarr[myarr.length-2]); //output "purple"

//----------------------------
//use push to add another element at the end of the array
console.log(myarr.push('orange')); //output 5

console.log(myarr);
//output ['red', 'blue', 'yelllow', 'purple', 'orange']

//-----------------------------

//another way to add an element
console.log(myarr[myarr.length] = 'green'); //output "green"

console.log(myarr); 
//output ['red', 'blue', 'yelllow', 'purple', 'orange', 'green']

//------------------------------

//can also sort the elements alphabetically
console.log(myarr.sort());
//output ['blue', 'green', 'orange', 'purple', 'red', 'yellow']







//******************************************

//Array with objects
let persons = [
    {givenName: 'Pig', familyName: 'Bodine', age: 20},
    {givenName: 'Jose', familyName: 'Juarez', age: 18},
    {givenName: 'Pirate', familyName: 'Prentice', age: 32}
];

console.log(persons[0]);
//output {givenName: 'Jose', familyName: 'Juarez', age: 18}

//----------------------------------

//if want to access some properties of the element, use "." operator
console.log(persons[0].givenName);
//output "Jose"

//----------------------------------

/*
if want to sort the array by age I cannot use persons.sort()
Need to pass an argument that will be a callback, 
a function called by the "sort" method from the API
and this callback will indicate how we compared 2 different elements
*/
function compareByAge(a, b){
    if(a.age < b.age)
        return -1;
    if(a.age > b.age)
        return 1;
    return 0;
}

//sorts it out alphabetically
console.log(persons.sort(compareByAge));
//output
/*
[Object{
    age: 18,
    familyName: "Juarez",
    givenName: "Jose"
},
Object{
    age: 20,
    firstName: "Bodine",
    givenName: "Pig"
},    
Object{
   age: 32,
    familyName: "Prentice",
    givenName: "Pirate"
}
]
*/


//-------------------------------------

//To remove an element from an array use splice

//if 0, it means start at index 0, remove 1 element.
//removes element just after 0
console.log(persons.splice(0, 1));

//removes index 1
//output [Object {familyName: 'Juarez', givenName: 'Jose', age: 18}]

//-------------------------------------

//To remove only the last element use .pop() method
console.log(persons.pop());


var a = [1, 2, 3, "four", "five", "six", "seven", "height"]
console.log(a.splice(0, 1));


//**************************************

//Using the concat method to add a string at the end of another one

var s1 = ' Jose';
var s2 = ' Juarez';

var s3 = s1.concat(s2);
console.log(s3); //output 'Jose Juarez'

//or 

var s3 = s2.concat(s1);
console.log(s3); //output 'Juarez Jose'

//***************************************** 

//removing the last character (equivalent to the pop() method)

var s = 'JavaScript';

//start at index 0 remove 1
s = s.substring(0, s.length-1);
console.log(s);

//another example
var r = 'starting';

//start at index 2 remove 3
r = r.substring(2, s.length-3);
console.log(r);


//********************************************* 

//Removing a certain number of chars starting from 
//a string, starting at a given index

var s = 'Michel';
 
function removeChars(s, startIndex, numberOfCharsToRemove) {
   return s.substring(0, startIndex) +  s.substring(startIndex + numberOfCharsToRemove);
}
 
// remove 3 consecutive chars from s, starting at index = 1
s = removeChars(s, 1, 3);
 
console.log(s); // will display "Mel" in the console


//************************************************ 

//Replacing a char at a given index:

function replaceAt(s, index, character) {
    return s.substr(0, index) + character + s.substr(index+character.length);
}
 
var s2 = "JavaScript";
s2 = replaceAt(s2, 1, "o");
 
console.log(s2); // will display "JovaScript"
 
// it also works with a string instead of a simple char
s2 = replaceAt(s2, 0, "Coca");
console.log(s2); // Will display "CocaScript"








