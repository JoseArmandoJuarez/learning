let a  = ['Monday', 'Tuesday', 'Wednsday'];

/*
a.forEach(function(day, index, arr){
  //day will be the current day
  document.body.innerHTML += day + " is a index: " + index + " from an array of " + arr.length + " elements!<br>";
});
*/

for (let i = 0; i < a.length; i++){
  document.body.innerHTML += a[i] + "<br>"; 
  //need the square brackets to display the value
}