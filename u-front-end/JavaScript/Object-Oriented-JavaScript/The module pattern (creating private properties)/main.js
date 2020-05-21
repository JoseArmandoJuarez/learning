
/**
 * The key ingredients to the Revealing module Pattern are:
 * 1. An IIFE (wrapper) / Immediately Invoked Function Expression
 * 2. The module content (variables, methods, objects, etc.)
 * 3. A returned object literal
 */
var myModule = (function(){
    var something = "TEST";

    function privateMethod (message) {
        console.log(message);
    }

    function publicMethod (message) {
        privateMethod(message);
    }

    return {
        revelingPublicMethod: publicMethod,
        property1: "Something",
        name: "Module Patterns",
        date: new Date(),
        other: something
    };
})();

console.log(myModule);
//{revelingPublicMethod: ƒ, revelingPrivateMethod: ƒ}

console.log(myModule.revelingPublicMethod('Hello there'));
//output - 'Hello there'



//***********************/
//A MORE COMPLEX EXAMPLE 
//***********************/

var person = (function(){
    var privateAge = 0;
    var privateName = 'Andrew';

    function privateAgeOneYear(){
        privateAge += 1;
        console.log('One year has passed! Current age is ' + privateAge);
    }

    function displayName(){
        console.log('Name: ' + privateName);
        return privateName;
    }

    function ageOneYear(){
        privateAgeOneYear();
    }

    //if want to change the value of name create another function  
    //that passes a new name to the privateName
    // function setName(name){
    //     privateName = name;
    // }

    return {
        name: displayName,
        //setName: setName, //new name
        age: ageOneYear
    };
})();

//displaying name
console.log(person.name()); //'Name: Andrew'

//try to replace the name with another name
person.privateName = 'Richard';

console.log(person.name()); // 'Name: Andrew'

console.log(person.age()); // One year has passed! Current age is 1
//if called again age increases
console.log(person.age()); // One year has passed! Current age is 2


