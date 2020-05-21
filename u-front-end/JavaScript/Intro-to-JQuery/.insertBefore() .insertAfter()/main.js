
/**
 * '#family2' should be a sibling of and come after '#family'. '#bruce' should be the only immediate child
 * of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'. 
 */


//create a div with an id of fmaily and inside the div an h1 that has text of Family2
var family2 = $("<div id='family2'><h1>Family2</h1></div>");

//create a div with an id of bruce and an h2 of text Bruce
var bruce = $("<div id='bruce'><h2>1. Bruce</h2></div>");

//insert the family2 <div> after the family1 <div>
family2.insertAfter('#family1');

family2.append(bruce); //add bruce inside family2 <div>
bruce.append("<div id='madison'><h3>2. Madison</h3></div>");// add this inside bruce
bruce.append("<div id='hunter'><h3>2. Hunter</h3></div>");// add this inside bruce



//******************************************/
//ANOTHER WAY TO WRITE THIS IS LIKE THIS....
//******************************************/

/*
//no need to this...
var family1 = $('#family1');

var family2 = $('<div id="family2"><h1>Family 2</h1></div>');

var bruce = $('<div id="bruce"><h2>Bruce</h2></div>');

var madison = $('<div id="madison"><h3>Madison</h3></div>');
var hunter = $('<div id="hunter"><h3>Hunter</h3></div>');

family2.insertAfter(family1);
//family2.insertAfter('#family1');
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);
*/