// add a click event listener on the whole document
// the processClick funciton is a callback:
// a function called by the browser when a click event is detected

window.addEventListener('click', processClick);

function processClick(event){
    document.body.innerHTML += "Button clicked<br>";
}

//We could have written this, with the body of the callback as an
//argument of the addEventListener function
window.addEventListener(
    'click',
     function(evt){ document.body.innerHTML += "Button clicked version 2<br/>"}
     );




//Another example...

function goShopping(callBack){
    console.log("Doing some shopping...");
    //console.log(callBack);
    callBack();
}

goShopping1();

function telefono(){
    console.log("Calling home!!...");
}

function chitchat(){
    console.log("chit-chating with the cashier!!...");
}

goShopping(telefono);

goShopping(chitchat);

goShopping( function(){ console.log("buying some Tomatos...") } );

