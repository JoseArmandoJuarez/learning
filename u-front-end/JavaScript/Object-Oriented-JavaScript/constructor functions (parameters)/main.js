
function Hero(name, role){
    this.name = name;
    this.role = role;

    this.introduce = function(){
        console.log('My name is ' + this.name + " and I am a " + this.role + ".");
    }
}

var taylor = new Hero('Taylor', 'mother');

var riley = new Hero('Riley', 'coach');

console.log(taylor.name);
console.log(riley.name);

console.log(taylor.introduce());
console.log(riley.introduce());

/**
 * Now it's your turn to create a constructor function. Declare a
 * Sandwich constructor function that takes three parameters:

    1. `bread` (string) - the type of bread for the sandwich (e.g. "Wheat")
    2. `meat` (array) - the meats to put on the sandwich
   (e.g. `[]` for a vegetarian sandwich!)
    3. `vegetables` (array) - the vegetables to include in the sandwich

*/

function Sandwich(bread,meat,vegetables){
    this.bread = bread;
    this.meat = meat ;
    this.vegetables = vegetables;    
    }

var Sand = new Sandwich("wheat",['Chorizo','Ham','Bacon'],['toamto','onion','avocado']); 