var s = 'Michel';

function removeChars(s, startIndex, numberOfCharsToRemove){
    return s.substring(0, startIndex) + s.substring(startIndex + numberOfCharsToRemove);
}

/*
    s = "Hello " + s;  //adds the Hello word with Michel
    >> "Hello Michel"

    //Can also add it like this...
    s += ' Buffa';
    >> "Michel Buffa"

    --------------------------

    //remove 3 consecutive chars from s, starting at index = 1
    //removes "ich" from "Michel"
    s = removeChars(s, 1, 3);

    console.log(s); //Will display "Mel" in the console

*/


var s1 = 'Michel';
var s2 = 'Buffa';

/*
    var s3 = s1 + " " + s2; //+ can be used to concat more than 2 strings
    >> undefined
    s3;
    >> "Michel Buffa"

    var s4 = s1.concat(s2);
    >> undefined
    s4;
    >> "MichelBuffa"

    var s5 = s2.concat(s1);
    >> undefined
    s5;
    >> "BuffaMichel"
*/


function replaceAt (s, index, character){
    return s.substr(0, index) + character + s.substr(index+character.length);
}
var s2 = "Javascript";
s2 = replaceAt(s2, 1, "o");

console.log(s2); //will display "J ovaScript"

//it also works with a string instead of a simple char
s2 = replaceAt(s2, 0 , "Coca");
console.log(s2); //will display "CocaScript"