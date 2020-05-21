function Dog(age, weight, name){
    this.age = age;
    this.weight = wight;
    this.name = name;
    //this function can be out of the Dog function
    // this.bark = function(){
    //     console.log(this.name + " says woof!");
    // }

}

//defining bark
Dog.prototype.bark = function(){
    console.log(this.name + " says woof!");
}

var dog = new Dog(2, 60, 'Java');

console.log(dog.bark());// Java says woof!