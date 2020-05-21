//Between 0 and 6
//Math.random() returns a value between 0 and 1
//Math.round retunrs the value of a number 
//rounded to the nearest integer
var day = Math.round(6*Math.random());

console.log("Picked day number: " + day);

if(day === 0) { 
    console.log('Monday');
  } 
  if(day === 1) { 
    console.log('Tuesday');
  } 
  if(day === 2) { 
    console.log('Wednesday');
  } 
  if(day === 3) { 
    console.log('Thursday');
  } 
  if(day === 4) { 
    console.log('Friday');
  } 
  if(day === 5) { 
    console.log('Saturday');
  } 
  if(day === 6) { 
    console.log('Sunday');
  } 

  //VERSION 2: using if... else statements
  if(day === 0) { 
    console.log('Monday');
  } else if(day === 1) { 
    console.log('Tuesday');
  } else if(day === 2) { 
    console.log('Wednesday');
  } else if(day === 3) { 
    console.log('Thursday');
  } else if(day === 4) { 
    console.log('Friday');
  } else if(day === 5) { 
    console.log('Saturday');
  } else if(day === 6) { 
    console.log('Sunday');
  } 

//VERSION 3: using a Switch()
switch(day) {
    case 0:
      console.log('Monday');
      break;
    case 1:
      console.log('Tuesday');
      break;
    case 2:
      console.log('Wednesday');
      break;
    case 3:
      console.log('Thursday');
      break;
    case 4:
      console.log('Friday');
      break;
    case 5:
      console.log('Saturday');
      break;
    case 6:
      console.log('Sunday');
      break;
  }

//May not use breaks to regroup cases
switch(day) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      console.log('Week day: we go to work!');
      break;
    case 5:
    case 6:
      console.log('WEEK END!'); 
      break; 
  }

// We can not do that, case is always followed by a value, not
// an expression
/*
switch(day) {
  case ((day >=0) && (day <=4)): // ERROR !!!!
    console.log('Week day: we go to work!');
    break;
  case ((day === 5) || (day === 6)):
    console.log('WEEK END!'); 
    break; 
}
*/

// FINALLY: Using a for loop

var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for(var i=0; i < daysOfWeek.length; i++){
    console.log("DAY (using an array): " + daysOfWeek[day]);
}