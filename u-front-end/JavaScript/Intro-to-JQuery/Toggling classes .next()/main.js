
//remove the class 'featured' from Article #2 and add it to Article #3!
//You must use jQuery's toggleClass method!


// don't change these variable!
var article2, article3;

article2 = $('.featured');// your code goes here!
//article2 = document.querySelector('.featured');

article3 = article2.next(); //artticle3 to the next sibling of article2

article2.toggleClass('featured'); //removes featured class - removes the colorbackgorund blue
//In Javascript - article2.classList.toggle('featured');
article3.toggleClass('featured'); //adds the featured class - adds the colorbackgorund blue
//In Javascript - article3.classList.toggle('featured');

console.log(article2);
console.log(article3);