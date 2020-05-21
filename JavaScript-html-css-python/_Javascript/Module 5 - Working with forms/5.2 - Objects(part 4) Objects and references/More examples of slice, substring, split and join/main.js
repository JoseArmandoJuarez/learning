var s = "My name is Bond! James Bond!";

console.log(s);
//output:  "My name is Bond! James Bond!"
 
console.log(s.slice(11, 16));
//output:  "Bond!"
 
console.log(s); // s is unchanged
//output:   "My name is Bond! James Bond!"
 
console.log(s.substring(11, 16));
//output:  "Bond!"
 
console.log(s); // s is still unchanged
//output:   "My name is Bond! James Bond!"

console.log(s = s.substring(11, 16));
//output:  "Bond!"
 
console.log(s); 
// this time s has changed, because we did s = s.substring(...), the same 
// could have been done with s = s .slice(...)
//output:  "Bond!"



var s = "My name is Bond! James Bond!";
 
console.log(s.slice(11, -1)); 
// start from index = 11 to length-1, extract the end of the string from 11th element
//output:   "Bond! James Bond"
 
console.log(s.substring(11, -1)); 
// the reverse, extract from 0 until 11-1, get the first 10 chars
//output:  "My name is "
 
console.log(s.substring(1, -1)); // extract from 0 to 1-1 = 0, get the first char
//output:   "M"





//split() and concat()

var s = "My name is Bond! James Bond!";
 
console.log(s.split(" "));
//output:  ["My", "name", "is", "Bond!", "James", "Bond!"]
 
console.log(s);
//output:  "My name is Bond! James Bond!"
 
console.log(s.split(' ').join('-#-'));
//output:  "My-#-name-#-is-#-Bond!-#-James-#-Bond!"
 
console.log(s.split(' ').join('.......'));
//output:  "My.......name.......is.......Bond!.......James.......Bond!"
 
console.log(s.split('Bond!').join('.......'));
//output:  "My name is ....... James ......."
 
console.log(s.split('Bond!').join(' '));
//output:  "My name is James "
 
conosle.log(s); // s is unchanged
//output:  "My name is Bond! James Bond!"
 
console.log(s.concat("And I've made a lot of movies!"));
//output:  "My name is Bond! James Bond! And I've made a lot of movies!"
 
console.log(s); // s is also unchanged by concat
//output:  "My name is Bond! James Bond!"
 
console.log(s = s + "and I've made a lot of movies!"); // this changes s
//output:  "My name is Bond! James Bond! And I've made a lot of movies!"
 
console.log(s += " Action films!"); 
// this too, most common syntax for concatenating strings
//output:  "My name is Bond! James Bond! And I've made a lot of movies! Action films!"
 
console.log(s); // s changed too
//output:  "My name is Bond! James Bond! And I've made a lot of movies! Action films!"