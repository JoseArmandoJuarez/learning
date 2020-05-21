function search()
{
    var queryURL = "https://jsonplaceholder.typicode.com/users";

    fetch(queryURL)
    .then(function(response)
    {
        //response.json() returns a json string, 
        //(json - is a syntax for storing and exchanging data.)
        //returning it will convert it 
        //to a pure Javascript
        //object for the next then's callback
        return response.json();
    })
    .then(function(users)
    {
        //users is a javascript object here
        displayUsersAsATable(users);
    })
    .catch(function(error)
    {
        console.log('Error during fetch: ' + error.message);
    });

    function displayUsersAsATable(users)
    {
        //users is a JavaScript object

        //empty the div that contains the table with users
        var usersDiv = document.querySelector("#users");
        usersDiv.innerHTML = "";

        //create and populate the table with users
        var table = document.createElement("table");

        //iterate on the array users
        users.forEach(function(currentUser)
        {
            //creates a row
            var row = table.insertRow();
            //inser cells in the row
            var nameCell = row.insertCell();
            nameCell.innerHTML = currentUser.name;
            var cityCell = row.insertCell();
            cityCell.innerHTML = currentUser.address.city;
        });

        //adds the table to the div
        usersDiv.appendChild(table);

    }
}