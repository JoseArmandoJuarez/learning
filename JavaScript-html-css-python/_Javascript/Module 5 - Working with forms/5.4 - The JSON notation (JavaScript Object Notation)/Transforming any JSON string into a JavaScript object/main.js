var metallica = {name:'Metallica', 
                albums:[
                    {name:"Master of Puppets", year:1986}, 
                    {name:"Black Album", year:1991}
                ]
            };

var metallicaJSON = JSON.stringify(metallica);
//undefined

console.log(metallicaJSON);
//output: "{"name":"Metallica","albums":[{"name":"Master of Puppets","year":1986},
         //{"name":"Black Album","year":1991}]}"

console.log(metallicaJSON.name); // metallicaJSON is not a JavaScript object

console.log(metallica.name); // metallica is an object
//output: "Metallica"

//Parse the data with JSON.parse(), and the data becomes a JavaScript object
var obj = JSON.parse(metallicaJSON); // JSON -> object


console.log(obj.name); // this is an object
//output:  "Metallica"




//********************/
// EASIER TO UNDERSTAND

//We received this text from a web server:
//'{ "name":"John", "age":30, "city":"New York"}'


//Use the javascript function JSON.parse() to convert text into a JavaScript object:

var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
console.log(obj); //output:   {name: "John", age: 30, city: "New York"}