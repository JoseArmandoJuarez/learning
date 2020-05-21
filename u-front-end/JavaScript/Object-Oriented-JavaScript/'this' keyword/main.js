const triangle = {
    type: 'Scalene',
    identify: function(){
        //this directly access the property name type
        console.log("This is a " + this.type + " triangle."); //output - 'This is a Scalene triangle'
    }
};

console.log(triangle.identify()); 


/****************/
//Another example
/****************/

const dog = {
    name: 'Jodi',
    age: 7,
    whatIsThis: function(){
        console.log(this); //prints out the whole object called dog
    },
    woof: function(){
        console.log(this.name + " says woof!");//Jodi says woof!
    },
    ageOneYear: function(){
        this.age += 1; //adds 7 + 1 = 8
        console.log('Current age: ' + this.age);//Current age: 8
    }
};

console.log(dog.whatIsThis());
console.log(dog.woof());
console.log(dog.ageOneYear());