//creating 200 elements and creating 200 function and each an giving it a eventListener

/*
var myCustomDiv = document.createElement('div'); //create a div

for(var i = 1; i <= 200; i++){ //loops 200 times
    var newElement = document.createElement('p'); //creates a new paragraph
    newElement.textContent = 'This is paragraph number ' + i; //adds text to the paragph + its number

    newElement.addEventListener('click', function respondToTheClick(){ //listens to a click event and execute the following...
        console.log('A pargraph was clicked.'); //logs 'A paragraph was clicked' if the user clicks on the paragraph
    });

    myCustomDiv.appendChild(newElement); //adds the paragraph inside the div created
}

document.body.appendChild(myCustomDiv); //adds the div to the document of the body

*/




//*******************************************/
//   EXAMPLE 2: CREATING ONLY ONE FUNCTION
//*******************************************/

//Instead of creating 200 functions, can create only one function out of the loop and referens it to the event listener
/*
var myNewDiv = document.createElement('div');

//function created out of the loop
function respondToTheClick(){
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++){
    var newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', respondToTheClick); //function is referenced here in the event listener

    myNewDiv.appendChild(newElement);
}
document.body.appendChild(myNewDiv);
*/




//**************************************************************************/
//   EXAMPLE 3: USING performance.now() & ONLY CREATING ONE eventListener()
//**************************************************************************/

//Instead of recreating 200 eventListeners just move it to the div
/*
var t0 = performance.now(); //checking the starting time


var myCustomDiv = document.createElement('div');


function respondToTheClick(evt){ //one single function
    console.log('A paragraph was clicked: ' + evt.target.textContent);// displaying which paragraph was clicked
}


for (var i = 1; i <= 200; i++){
    var newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener('click', respondToTheClick); //one single event listener

document.body.appendChild(myCustomDiv);


var t1 = performance.now(); //checking the ending time
console.log("this took: " + (t1 - t0) + " milliseconds"); //log how long it took to execute the code
*/





//******************************************************/
//   EXAMPLE 4: USE A documentFragment INSTEAD OF A DIV
//******************************************************/

/*
var fragment = document.createDocumentFragment(); //use documentFragemnt instead of a div

for (var  i = 0; i < 200; i++) {
    var newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); 
*/





//SMALL EXAMPLE OF CALL STACK
/*
function addParagraph() { //2. executes what in this function
    const para = document.createElement('p'); //exectue this...
    para.textContent = 'JavaScript is single threaded!'; //execute this...

    appendNewMessage(); //waith... call this function
    document.body.appendChild(para); //5. comes back and finishes executign the rest of this function
}

function appendNewMessage() { //3. execute what is inside this funciton
    const para = document.createElement('p'); //execute this...

    para.textContent = "Isn't that cool?"; //execute this...
    document.body.appendChild(para); //execute this
}//4. when this function is done executing go back to where this funciton was called to finish up the rest

addParagraph(); //1. calls for addPargraph

//output: 'Isn't cool?' 
//output: 'JavaScript is single threaded!'
*/



/********************/
//SETTIMEOUT() method
/********************/

console.log('1');

setTimeout(function sayHi(){
    console.log('2');
}, 0); //wait 0 second meaning it should execute immedietly WRONG!
//because of the event loop this function is passed to the heap and then moves to the qeueu 
//and waits until the call stack is empty, once the call stack is empty it executes sayHi()

console.log('3');





var count = 0;

function generateParagraphs(){
    
    var fragment = document.createDocumentFragment();

    for(var i = 1; i <= 500; i++){
        var newElement = document.createElement('p');
        newElement.textContent = 'This is paragraph ' + i;
        count = count + 1;

        fragment.appendChild(newElement);
    }

    document.body.appendChild(fragment);

    if(count <= 10000){ //when count reaches 10000 it stops
        setTimeout(generateParagraphs, 1000); //generate the paragraphs every 1 second 
        console.log(count); //count goes up by 500
    }//when done goes back up to the loop again... and again... until the number reaches 10,000
}

generateParagraphs();
