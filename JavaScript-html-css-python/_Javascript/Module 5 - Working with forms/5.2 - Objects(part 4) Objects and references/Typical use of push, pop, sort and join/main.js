
//Push().
var a = [3, 5, 1, 7, "test"];
console.log(a.push('new')); //appends at the end and returns the new length

//dysplays
//[3, 5, 1, 7, "test", "new"]

//Pop().
a.pop(); //removes the last element and return it
//displays: [3, 5, 1, 7, "test"]

var b = a.sort(); 
console.log(b);
//displays:  [1, 3, 5, 7, "test"]
 
console.log(a);
//dysplays: [1, 3, 5, 7, "test"]
 
//join()
console.log(a.join(' and '));
//dyplays:  "1 and 3 and 5 and 7 and test"



//Use of the method slice
console.log(a);
//displays:  [1, 3, 5, 7, "test"]
 
console.log(b = a.slice(1, 3)); // elements of indexes = 1 and 2
//dysplays:   [3, 5]
 
console.log(b = a.slice(0, 1)); // element of index = 0
//dysplays: [1]
 
console.log(b = a.slice(0, 2)); // elements o indexes = 0 and 1
//displays:    [1, 3]
 
console.log(a);
//displays:     [1, 3, 5, 7, "test"]




//use of the method splice()
console.log(a);
//displyas:   [1, 3, 5, 7, "test"]
 
console.log(b = a.splice(1, 2, 100, 101, 102));
//displays:     [3, 5]
 
console.log(a);
//displays:     [1, 100, 101, 102, 7, "test"]
 
console.log(a.splice(1, 3));
//displays:   [100, 101, 102]
 
console.log(a);
//displays:   [1, 7, "test"]