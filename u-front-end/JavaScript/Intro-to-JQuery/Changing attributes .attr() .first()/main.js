//set the href of the <a> in the first nav item to "#1".

//You must use jQuery's attr() method!

// Start with this variable!
var navList;

navList = $('.nav-list');

var firstLi = navList.children().first();

var addingHref = firstLi.find('a');
addingHref.attr('href', '#1');

console.log(navList);
