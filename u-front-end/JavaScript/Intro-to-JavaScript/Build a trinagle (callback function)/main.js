// creates a line of * for a given length
function makeLine(length) { //length holds the length of i from buildTriangle
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n"; //returns the symbol *
}

function buildTriangle(width){//width holds the value 10
  var triangle=""; 
  
  for (var i=1; i<=width; i++){ 
    triangle += (makeLine(i)); //passes i value to makeLine(length)
  }
  
  return triangle;
}

// your code goes here.  Make sure you call makeLine() in your own code.
buildTriangle(10); 

// test your code by uncommenting the following line
console.log(buildTriangle(10));

