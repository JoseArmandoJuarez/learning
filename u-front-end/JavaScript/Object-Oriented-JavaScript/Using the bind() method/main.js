var dog = {
    age: 5,
    growOneYear: function (){
        this.age += 1;
    }
};

function invokeTwice(cb){
    cb();
    cb();
}

console.log(invokeTwice(dog.growOneYear));

var myGrow = dog.growOneYear.bind(dog);
console.log(invokeTwice(myGrow));
console.log(dog.age);