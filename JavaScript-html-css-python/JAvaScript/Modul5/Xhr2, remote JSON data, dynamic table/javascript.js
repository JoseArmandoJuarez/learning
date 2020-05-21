function search(){
    var queryURL = "https://jsonplaceholder.typicode.com/users";
    
    //lines 5 and 6 build in an ajax request Xhr2 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', queryURL, true);
    
    //called when the response has arrived
    /*when the server answers, this callback is executed, 
    and inside it, this.response corresponds to the response
    from the HTTP server. It's in JSON format (line 13)*/
    xhr.onload = function(e){
      var jsonResponse = xhr.response;

      // turn the response into a JavaScript object
      /* we turn the JSON response into a regular 
      JavaScript object we can work with, using JSON.parse().*/
      var users = JSON.parse(jsonResponse);
      displayUsersAsATable(users);

      /* displays the first user
      console.log("first user: " + JSON.stringify(users[0]));
       */ 
    }
    
    //in case of an error
    xhr.onerror = function(err){
      console.log("Error: " + err);
    }
    
    //sends the request
    //Is executed after: the request is sent in the background (we say "asynchronously").
    xhr.send();
  }
 
 function displayUsersAsATable(users){
     //users is a Javascript object
   
   //empty the div that contains the results
   var usersDiv = document.querySelector("#users");
   usersDiv.innerHTML = "";
   
   //creates and populate the table with users
   var table = document.createElement("table");
   
   users.forEach(function(currentUser){
     //console.log(currentUser.name);
     
     var row = table.insertRow();
     row.innerHTML = "<td>" + currentUser.name + "</td><td>" + currentUser.email + "</td>";
   });
   usersDiv.append(table);
 }