function add(){
    //get the current value of the input field
    var val = document.querySelector('#newNumber').nodeValue;
    if((val !== undefined) && (val !== "")){
        //val exists and non empty
        //get the list of numbers. It's a <ul>
        var ul = document.querySelector("#number");
        //add it to the list as a new </li>
        var newNumber = document.createElement("li");
        newNumber.textContent = val;
        // or newNumber.innerHTML = val

        //insert ul element
        ul.append(newNumber);
    }
}

function reset(){
    //get the list of numbers. It's a <ul>
    var ul = document.querySelector("#numbers");
    //reset it: no children
    ul.innerHTML = "";
}


//SAME THING JUST WITH innerHTML
/*
function add() {
    // get the current value of the input field
    var val = document.querySelector('#newNumber').value;
    
    if((val !== undefined) && (val !== "")) {
      // val exists and non empty
      
      // get the list of numbers. It's a <ul>
      var ul = document.querySelector("#numbers");
       
      ul.innerHTML += "<li>" + val + "</li>";
    }
  }
  
  function reset() {
    document.querySelector("#numbers").innerHTML = "";
  }
  */