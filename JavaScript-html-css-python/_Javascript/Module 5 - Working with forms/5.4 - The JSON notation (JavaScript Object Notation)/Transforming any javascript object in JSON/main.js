
/*
A common use of JSON is to exchange data to/from a web server.
When sending data to a web server, the data has to be a string.
Convert a JavaScript object into a String with JSON.stringyfy()
*/

var x = 3;
console.log(JSON.stringify(x)); //output: "3"

var simpleObject = {x:12, y:30};
console.log(JSON.stringify(simpleObject)); //output: "{"x":12, "y":30}"


var anArray = ["Monday", "Tuesday", "Wednesday"];

console.log(JSON.stringify(anArray)); 
//output:  "["Monday", "Tuesday", "Wednesday"]"



var complexObject = {name: 'Metallica',
                        albums:[
                            {name: "Master of Puppets", year: 1986},
                            {name: "Black Album", year: 1991}
                        ]
                    };

console.log(JSON.stringify(complexObject));
//output: "{"name":"Metallica","albums":[{"name":"Master of Puppets","year":1986},{"name":"Black Album","year":1991}]}"
