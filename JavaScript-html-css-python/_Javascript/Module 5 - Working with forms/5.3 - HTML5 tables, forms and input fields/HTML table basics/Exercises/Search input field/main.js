
var myPets = ["dog",
            "cat",
            "fish",
            "turtle",
            "snake",
            "rabbit",
            "mouse",
            "hamster",
            "ferret",
            "pig",
            "hedgehog",
            "chicken",
            "parrot",
            "iguana",
            "duck",
            "monkey",
            "guinea pig"
 ];

function search(){
    
    var txt = document.getElementById('txt').value;
    var index = myPets.indexOf(txt);

    if(index !== -1)
    {
        document.getElementById('doesItExist').innerHTML =  "<br/><h2>This PET is located at number " + index + "</h2>";
    }else{
        document.getElementById('doesItExist').innerHTML = "<br/><h2>This Pet does NOT exists</h2>";
    }

}


function myFunction(){
     var dynamicHTML = "";
    for(var i = 0; i < myPets.length; i++){


        dynamicHTML += "<tr><th>" + i + ".  " + myPets[i] + "</th></tr>";
    }

    document.getElementById("myPets").innerHTML = dynamicHTML;
 }
 myFunction();