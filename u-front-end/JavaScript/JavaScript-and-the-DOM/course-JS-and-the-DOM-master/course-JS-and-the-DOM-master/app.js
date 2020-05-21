const communityHeading = document.querySelector('h6.text-center');

// communityHeading.style.fontSize = '2em';
// communityHeading.style.color = 'purple';

//instead of a bunch of lines of code use style.cssText
//treat the css styling like in a css styleSheet
communityHeading.style.cssText = 'color: blue; font-size: 2em; background-color: orange';


/*
* difference between document.addEventListener() and 
* mainHeading.addEventListener() (assuming the mainHeading variable is an element)
*
* The document.addEventListener() method attaches an event handler to the document and
* the mainHeading.addEventListener() mehtod attaches an event handler to the specified element.
*/

//simple example of an addEventListener() method
document.addEventListener('scroll', function() {
    console.log("you've scrolled in the document!");

    var mainHeading = document.querySelector('h1');

    mainHeading.style.cssText = 'font-size: 3em; background-color: red';
});


//Removing using a event listener
//When a key is pressed do the following...
document.body.addEventListener('keypress', function(){

    //logs when key is pressed
    console.log('removing first child');
    
    //selecting id contain-all and removing the first child inside the contain-all
    document.querySelector('#contain-all').firstElementChild.remove();

});


//The event object that includes a ton of information about the event itself.
// the name evt does not matter can be any name (give it any name that's informative/descriptive!)
/*document.addEventListener('click', function(evt){
    console.log(evt);
});
*/