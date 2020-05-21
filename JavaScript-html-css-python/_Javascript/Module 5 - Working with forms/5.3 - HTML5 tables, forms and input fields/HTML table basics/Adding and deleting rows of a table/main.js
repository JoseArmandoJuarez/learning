
function insertRow(){
    var table = document.querySelector("#myTable");

    //without parameters, insert at the end,
    //otherwise parameter = index where the row will be inserted

                            //inside the brakets if pass an index, it will be the position, 
                            //the location, where you want to insert the new row.
    var row = table.insertRow(); //insert at the end of the table

    //insert ne rows
    row.innerHTML = "<td>NEW</td><td>NEW</td><td>NEW</td>"

    //ANother way to insert rows
    /*
    var cell1 = row.insertCell();
    cell1.innerHTML = "<b>New cell 1</br>";

    var cell2 = row.insertCell();
    cell2.innerHTML = "New cell 2";

    var cell3 = row.insertCell();
    cell3.innerHTML = "New cell 3";
    */
}

function deleteFirstRow(){
    var table = document.querySelector("#myTable");
    table.deleteRow(-1); // index 1 not 0 because 0 is the header
    //if want to delete last row use -1
}