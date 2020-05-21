/*
* Write a nested for loop to print out all of the different seat combinations in the theater.
* The first row-seat combination should be 0-0 
* The last row-seat combination will be 25-99
* 
* Things to note: 
*  - the row and seat numbers start at 0, not 1
*  - the highest seat number is 99, not 100
*/

// Write your code here

for (var row = 0; row < 26; row ++ ){ //this loop increments when the inner loop finishes incrimenting
 
 for (var seat = 0; seat < 100; seat ++ ){ //once this loop reaches its end, it exits and goes to the outer loop
   console.log(row +'-'+ seat);
 } 
 
}
