
//Instead of using a constructo function and using the new keyword to create an object
//can use a factory function that returns a new object

function Basketball(color, size){
    return {
        color: color,
        size: size,
        numDots: 35000
    };
}

var orangeBasketball = Basketball('orange', 'medium');
console.log(orangeBasketball);
//{color: 'orange', size: 'medium', numDots: 35000}

var blueBasketball = Basketball('blue', 'small');
console.log(blueBasketball);
//{color: 'blue', size: 'small', numDots: 35000}

var yellowBasketball = Basketball('yellow', 'big');
console.log(yellowBasketball);
//{color: 'yellow', size: 'big', numDots: 35000}






//*************************************/
//FACTORY FUNCTION THAT RETURNS CLOSURE
//*************************************/

function Radio(mode){

    var on = false;

    return{
        mode: mode,
        turnOn: function(){
            on = true;
        },
        isOn: function(){
            return on;
        }
    };
}

var fmRadio = Radio('fm');
console.log(fmRadio) //{mode: "fm", turnOn: f, isOn: f}

console.log(fmRadio.isOn()); //output - false

console.log(fmRadio.turnOn());// reasigns the value of the variable on to true

console.log(fmRadio.isOn()); //output - true