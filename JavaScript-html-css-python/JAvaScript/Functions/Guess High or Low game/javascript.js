var correctNumber = Math.round(10*Math.random());
console.log(correctNumber);

function Guess() {
    var guess = document.querySelector("#guessId").value;
    
    if (guess == 0) {
        document.getElementById("p1").innerHTML = "No number inserted...";

    }
    else if ((guess <=0) || (guess >10)) {
        document.getElementById("num").innerHTML = "Error! The number must be between 1 and 10!";
    }
    else if (guess < correctNumber) { 
        document.getElementById("num").innerHTML = "Too small!";
    }
    else if (guess > correctNumber) { 
        document.getElementById("num").innerHTML = "Too big!";
    } else {
        document.getElementById("num").innerHTML = "Correct!!! The number is: "+correctNumber+  "! <br><br> <a href=\"\"><button>Try again</button></a>";
    }
}