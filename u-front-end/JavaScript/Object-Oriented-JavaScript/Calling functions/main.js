
/*

var isOn = false; 
function powerButton() {

    function turnOff() {
        isOn = false; //if the variable name does not start with var then by default its declared globally
        console.log('Turning off the car');
    }

    function turnOn() {
        isOn = true;
        console.log('Turning ON the car');
    }

    if (isOn)
        return turnOff; 
    else 
        return turnOn;
}


//Example 2
function powerButton2() {

    if (isOn)
        return function () {
            isOn = false;
            console.log('Turning off the car');
        };
    else 
        return function () {
            isOn = true;
            console.log('Turning ON the car');
        };
}

*/



//CALLBACK FUNCTIONS
//******************/

function callAndAdd(n, callbackFunction){
    //n has stored 2 and the callbackFunction() invokes the returnThree function 
    return n + callbackFunction();
        // 2 + returnsThree()
        // 2 + 3
}

function returnsThree(){
    return 3;
}

console.log(callAndAdd(2, returnsThree)); //output - 5




            //array - [-2, 7, 11, -4, -10]
            //callback - isPositive (n > 0 if the number is greater than 0)
function each(array, callback){
                   //0 < 5
    for (var i = 0; i < array.length; i++){

        //invoke isPostive function anc checking if the number is greater than 0
        //if it is then go tru the if statement
        if(callback(array[i])){
            console.log(array[i]);
        }

    }
}

function isPositive(n){
    return n > 0;
}

console.log(each([-2, 7, 11, -4, -10], isPositive));