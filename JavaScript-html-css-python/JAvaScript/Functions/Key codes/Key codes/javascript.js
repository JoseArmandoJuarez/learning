//Example 1 tells if the user click and unclicks a key
/*
window.onekeyup = processKeyUp;
window.onkeydown = processKeyDown;
*/
/*
or we could have written:
window.addEventListener('keyup', processKeyUp);
window.addEventListener('keydown', processKeyDown);
*/
/*
function processKeyUp(evt)
{
  var keys = document.queryselector('#keys');
  keys.innerHTML += "keyup: " + evt.key + " code: " + evt.keyCode + "<br>";
}

function processKeyDown(evt)
{
  var keys = document.querySelector('#keys');
  keys.innerHTML += "keydown: " + evt.key + " code: " + evt.keyCode + "<br>";
}*/

//---------------------------------------------------


/* 
//gives the key code number

window.onkeypress = processKeyPress;

//or can be written as 
//window.addEventListener('keypress', processKeyPress);

function processKeyPress(evt)
{
    var keys = document.querySelector('#keys');
    keys.innerHTML += "keypress: " + evt.key + " code: " + evt.keyCode + "<br>";
}
*/


//---------------------------------------------------

window.onkeydown = processKeyDown;

/* or can be writen as
    window.addEventListener('keypress', processKeyPress);
*/

function processKeyDown(evt){
    var keys = document.querySelector('#keys');

    keys.innerHTML += "keypress: " + evt.key + " code: " + evt.keyCode + " Modifiers: ";

    var modifiers = "";

    if(event.shiftKey){
        modifiers += "SHIFT ";
    }

    if(event.altKey){
    modifiers += "ALT ";
    }

    if(event.ctrlKey){
        modifiers += "CTRL ";
    }

    if(modifiers === ""){
        modifiers = "NONE";
    }

    keys.innerHTML += modifiers + "<br>";
}