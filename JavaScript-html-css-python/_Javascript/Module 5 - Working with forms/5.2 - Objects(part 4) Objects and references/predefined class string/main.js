
//Examples

var s = "Michel";
console.log(s); //output: "Michel"

//add more to the string
s[0] = 'z'; //cannot do that only returns the value
console.log(s); //ouput: "Michel"

//to add its like this....
s = s + " says hello";
console.log(s); //output:  "Michel says hello"





//More examples

var s = "Michel says hello";

//to modify s to uppercase do this...
console.log(s = s.toUpperCase()); //output: "MICHEL SAYS HELLO"

//or lowercase
console.log(s = s.toLowerCase()); //output: "michel says hello"




//TO check the position of the index
var x = "Hello my name is Jose";

//check the position of "o" from "hello"
console.log(s.indexOf('o')); //ouput:  4

//to check the index of "o" from "Jose"
console.log(s.lastIndexOf('o')); //output: 18





//To check the position  of a specific character
var y = "My name is Jose";

//checks the character at index 6
console.log(s.charAt(6)); //ouput: "m"




//displaying specific characters
var s = "Hello my name is Jose";

//Its better to use .substring than slice

//(stat, end) of the index
console.log(s.substring(0, 5)); //output:  Hello

//slice does the same
console.log(s.slice(0, 5)); //output:  Hello






//separates the string...
var s = "Hello my name is Jose";
console.log(s.split(' ')); //output: ["Hello", "my", "name", "is", "Jose"];



//Join words...
var s = "Hello my name is Jose";
console.log(s.split(' ').join('---')); //output: "Hello---my---is---Jose"
















function secondIndexOfString(sourceString, letter){

    var eCounter = 0;

    for (var i = 0; i < sourceString.length; i++){
            
        if(letter == sourceString[i]){
            eCounter = eCounter + 1;
    
            if (eCounter == 2){
                return i;
            }
        } 
    }
    return -1;
}
 
var myString = "This is another example of how to create string variables";
var result1 = secondIndexOfString(myString, "e");
console.log( "Index at:" + result1);
var result2 = secondIndexOfString("Hello this is a test for Jose", "l"); // second time, what is the value of myParameterNumber
console.log( "Index at:" + result2);
var result3 = secondIndexOfString("Call this again", "i");
console.log( "Index at:" + result3);




function indexOfString(sourceString, letter){
    
    //return sourceString.indexOf(letter);

    for (var j = 0; j < sourceString.length; j++){

        if(letter == sourceString[j]){
            
            return j;

        }
    }

    return -1;

}

var letter1 = "o";
var result1 = indexOfString(myString, letter1);
console.log("Index at: " + result1);




function lastIndexOfString(sourceString, letter){

    for (var k = myString.length - 1; k < myString.length; k--){

        if(letter == sourceString[k]){
            
            return k;
            
        }
    }

    return -1;

}

var letter = "a";
var result1 = lastIndexOfString(myString, letter);
console.log("Last index of letter a is at: " + result1);

var letter = "e";
var result2 = lastIndexOfString(myString, letter);
console.log("Las index of letter e is at: " + result2);

var letter = "v";
var result3 = lastIndexOfString(myString, letter);
console.log("Las index of letter v is at: " + result3);














function wordCounter(param1){

    param1 = param1.trim();

    var count = 0;
    for (var y = 0; y < param1.length; y++){

        if(" " == param1[y]){

            count = count + 1;
            
        }
    }

    return count + 1;

}

var myString = "My name is Jose";
var wordCounted = wordCounter(myString);
console.log("There are: " + wordCounted + " words");

var wordCounted2 = wordCounter("Hello this is a test for Jose ");

console.log("There are " + wordCounted2 + " words");


