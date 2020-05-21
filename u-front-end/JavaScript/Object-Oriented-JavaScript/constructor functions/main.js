
//Whe SoftwareDeveloper is invoked with the new keyword,
//its going to create a new object that has a favorite language property,
//that has a value of JavaScript

function SoftwareDeveloper(name) {
    this.favoriteLanguage = 'JavaScript';
    this.name = name;
  }

//calling SoftwareDeveloper constructor function with a new keyword,
//ans create a new object called developer

var developer = new SoftwareDeveloper();

this.engineer = new SoftwareDeveloper();
this.programmer = new SoftwareDeveloper();

var instructor = new SoftwareDeveloper('Andrew');




//The SoftwareDeveloper object is logged to the console
console.log(developer); //output - SoftwareDeveloper {favoriteLanguage: "Javascript"}

console.log(engineer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }
console.log(programmer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }


console.log(instructor);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Andrew' }
