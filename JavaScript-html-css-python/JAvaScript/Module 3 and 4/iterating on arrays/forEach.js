/*
//EXAMPLE 1  using forEach

var persons = [
    {name: 'Michel', age:51},
    {name: 'Henri', age:20},
    {name:'Francois', age:29}
];

persons.forEach(function(p, index){
    document.body.innerHTML += p.name + ", age" + p.age + ", at index " + index + " in the array<br>";
});

//Displays
    >>Michel, age 51, at index 0 in the array
    >>Henri, age 20, at index 1 in the array
    >>Francois, age 29, at index 2 in the array
*/



/*
//EXAMPLE 2 using for Each
var persons = [
    {name:'Michel', age:51},
    {name:'Henri', age:20},
    {name:'Francois', age:29}
];

persons.forEach(function(p, index, theArray) {
    document.body.innerHTML += p.name + ", age " + p.age + ", at index " + index + " in the array of " + theArray.length + " elements<br>";
});


//DISPLAYS
    >>Michel, age 51, at index 0 in the array of 3 elements
    >>Henri, age 20, at index 1 in the array of 3 elements
    >>Francois, age 29, at index 2 in the array of 3 elements


*/


