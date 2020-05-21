const rodent = {
    favoriteFood: 'cheese',
    hasTail: true
};

//Let's now build a Mouse() constructor function, and assign its prototype to rodent:
function Mouse() {
    this.favoriteFood = 'cheese';
}
  
Mouse.prototype = rodent;

//If we create a new Mouse object, its prototype should be the rodent object. Let's confirm:
  
const ralph = new Mouse();
  
const result = rodent.isPrototypeOf(ralph);
  
console.log(result);
// true