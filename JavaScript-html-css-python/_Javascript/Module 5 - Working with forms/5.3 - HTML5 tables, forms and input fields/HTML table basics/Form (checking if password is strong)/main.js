
function checkpasswords(){
    //getting the Id passwordA
    var p1 = document.getElementById("passwordA");

    //getting the Id passwordB
    var p2 = document.getElementById("passwordB");

    //checking if p1 is equal to p2
    if(p1.value !== p2.value){
        p2.setCustomValidity("Passwords do not match!");
    }else{
        p2.setCustomValidity("");
    }

    //Checking the strength of the Password
    var strength = document.getElementById("passwordStrength");
    var multiplier = 0;

    //checks if the input has the following
    if( /[a-z]/.test(p1.value) ){multiplier++;}
    if( /[A-Z]/.test(p1.value) ){multiplier++;}
    if( /[0-9]/.test(p1.value) ){multiplier++;}
    strength.value = p1.value.length * multiplier; 
}

function validateCallingOptions(){
    var input = document.getElementById("call");
    var validity = input.validity;

    if(validity.patternMismatch){
        input.setCustomValidity("Not a phone number");
    }else{
        input.setCustomValidity("");
    }
}