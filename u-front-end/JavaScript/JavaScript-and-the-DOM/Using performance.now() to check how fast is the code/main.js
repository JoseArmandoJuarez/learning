
var startingTime = performance.now();//to get the an initial start time for the code

console.log("Start Time: " + startingTime);

 
//Runt the code
for (var i = 1; i <= 100; i++) {
    for (var j = 1; j <= 100; j++) {
        console.log("i and j are: " + i + ", " + j);
    }
}


var endingTime = performance.now(); //execute performance.now() to get another time measurement

console.log("Ending Time: " + endingTime);

//subtract the initial time from the final time in milliseconds
var timeInMillisec = (endingTime - startingTime).toFixed(0);

//subtract both times and multiple by 1000 to get microSeconds
var microSeconds = ((endingTime - startingTime)*1000).toFixed(0);

//subtract both times and divide by 1000 to get seconds
var timeInSeconds = ((endingTime - startingTime)/1000).toFixed(0);

console.log('This code took: ' + timeInMillisec + ' milliseconds.');
console.log('This time in micro seconds is: ' + microSeconds + " micro seconds.");
console.log('This time in seconds is: ' + timeInSeconds + " seconds.");