

let a = ['Monday', 'Tuesday', 'Wednesday'];

/*
This method takes a single callback. 
Usually we type the callback body between
the parenthesis. So declaring an anonymous function,
an anonymous callback body between the parenthesis.
And the first example is to use only a single
argument that will be the current element while we are iterating.
*/

/*
The forEach() method calls a provided function once 
for each element in an array, in order.
*/

a.forEach(function(day, index, arr){
    //day will be the current day
    document.body.innerHTML += day + " is at index: " + index + " from an array of " + arr.length + " elements! </br>";
});

//output
/*
Monday is at index: 0 from an array of 3 elements! 
Tuesday is at index: 1 from an array of 3 elements! 
Wednesday is at index: 2 from an array of 3 elements! 
*/

//********************************************* 

//another way is to use a for loop

for (let i = 0; i < a.length; i++){
    document.body.innerHTML += a[i] + "<br>";
}

//Output  will be the same
/*
Monday is at index: 0 from an array of 3 elements! 
Tuesday is at index: 1 from an array of 3 elements! 
Wednesday is at index: 2 from an array of 3 elements! 
*/

//to skip elements use i+=2
for (let i = 0; i < a.length; i+=2){
    document.body.innerHTML += a[i] + "<br>";
}

//Output  will be the same
/*
Monday is at index: 0 from an array of 3 elements! 
Wednesday is at index: 2 from an array of 3 elements! 
*/


//NOTE: Which is better to use, it depends
/*
 In the for loop I can iterate 2 by 2 or break the loop in
 the middle using the 'break' keyword and a condition with
 an 'if'.
 All this things cannot be done with 'forEach' operator.
 If just need to iterate and do something on each element
 use the 'forEach' operator.
 If I need maybe to jump over some elements, do something
 in the middle, stop the iteration, then go for the 'for loop'. 
*/



//****************************************

//another example

//This can be useful if we need to know the length of the array, 
//or do special things within the array (add/change/move elements during the iteration)
var persons = [
    {name:'Michel', age:51},
    {name:'Henri', age:20},
    {name:'Francois', age:29}
  ];
  
  persons.forEach(function(p, index, theArray) {
    document.body.innerHTML += p.name + ", age " + p.age + 
                               ", at index " + index + " in the array" +
                               theArray.length + "elements<br>"; 
  });

  /*
  OUTPUT
    Michel, age 51, at index 0 in the array of 3 elements
    Henri, age 20, at index 1 in the array of 3 elements
    Francois, age 29, at index 2 in the array of 3 elements 
   */


  //an example using the for loop

  var persons = [
      {name: 'Michel', age: 51},
      {name: 'Henri', age: 20},
      {name: 'Francois', age: 29}
  ];

  for(var i = 0; i < persons.length; i++){
      var p = persons[i]; //current element
      document.body.innerHTML += p.name + "<br>";
  }

  /*
  OUTPUT
  Michel
  Henri
  Francois
  */