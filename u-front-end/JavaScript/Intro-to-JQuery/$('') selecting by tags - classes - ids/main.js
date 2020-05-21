// use a jQuery tag selector to grab all of the <li>s on the page!
// Start with Selecting the tag <li></li>
var listElements;

listElements = $('li');// your code goes here!
//this is just like saying in JavaScript - document.querySelectorAll('li');

console.log(listElements);
//output: [li.nav-item, li.nav-item.active, li.nav-item, li.nav-item, li.nav-item, li.nav-item, li.article-item, li.bold, li, li, li.article-item.featured, li.article-item, li.article-item]




//use a jQuery class selector to grab all of the elements of class 'article-item' on the page!

var articleItems;

articleItems = $('.article-item');
//this is just like saying in JavaScript - document.querySelectorAll('.article-item'); 

console.log(articleItems);
//output: [li.article-item, li.article-item.featured, li.article-item, li.article-item]





//use a jQuery class selector to grab all the element with id 'nav' on the page!

// don't change this variable!
var nav;

nav = $('#nav');
//In JavaScript - document.querySelecorAll('#nav');

console.log(nav);

//[nav#nav.navigator, context: document, selector: "#nav"]