
//Xhr2 - XML Http Request level 2

function search(){

    var queryURL = "https://jsonplaceholder.typicode.com/users";

    //create a XML Http Request 
    var xhr = new XMLHttpRequest();

    //Then need to indicate what is the parameter of the request
    xhr.open('GET', queryURL, true);

    //indicating a callback that will call by 
    //the browser only when the response arrives
    xhr.onload = function(e){
        var users = JSON.parse(xhr.response);
        
        displayUsersAsATable(users);
    }

    //Then send the request
    xhr.send();
}


function displayUsersAsATable(users){
    //users us a JavaScript object

    //empty the div that contains the resi;ts
    var usersDiv = document.querySelector("#users");
    usersDiv.innerHTML = "";

    //creates and populate the table with users
    var table = document.createElement("table");

    //"users.forEach()" tabkes a callback with the 
    //first parameter being the current element of the users array.
    users.forEach(function(currentUser){
        //creating a row for the table
        var row= table.insertRow();
        //row.innerHTML = currentUser.name; //only displays the name in a table
        row.innerHTML = 
        "<tr><th><td>" + currentUser.name + "</td>" + 
        "<td>" + currentUser.username + "</td>" +
        "<td>" + currentUser.email + "</td>" + 
        "<td>" + currentUser.address.street + "</td>" +
        "<td>" + currentUser.address.suite + "</td>" +
        "<td>" + currentUser.address.city + "</td>" +
        "<td>" + currentUser.address.zipcode + "</td>" +
        "<td>" + currentUser.address.geo.lat + "</td>" +
        "<td>" + currentUser.address.geo.lng + "</td>" +
        "<td>" + currentUser.phone + "</td>" +
        "<td>" + currentUser.website + "</td>" +
        "<td>" + currentUser.company.name + "</td>" +
        "<td>" + currentUser.company.catchPhrase + "</td>" +
        "<td>" + currentUser.company.bs + "</td></th></tr>";
        
        
        console.log(currentUser.name);
    });

    //adding the table to a div
    usersDiv.append(table);
}