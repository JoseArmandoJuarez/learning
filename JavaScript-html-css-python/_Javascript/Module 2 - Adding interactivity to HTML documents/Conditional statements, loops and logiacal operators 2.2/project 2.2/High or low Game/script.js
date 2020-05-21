var correctNumber = Math.round(10*Math.random());
console.log(correctNumber);

function Guess() {
    var guess = document.querySelector("#guessId").value;
    
    if (guess == 0) {
        document.getElementById("number").innerHTML = "No number inserted...";

    }
    else if ((guess <=0) || (guess >10)) {
        document.getElementById("number").innerHTML = "Error! The number must be between 1 and 10!";
    }
    else if (guess < correctNumber) { 
        document.getElementById("number").innerHTML = "Too small!";
    }
    else if (guess > correctNumber) { 
        document.getElementById("number").innerHTML = "Too big!";
    } else {
        document.getElementById("number").innerHTML = "Correct!!! The number is: " + correctNumber+  "! <br><br> <a href=\"\"><button>Try again</button></a>";
    }
}