function Sandwich(name, bread,meat,vegetables){
    this.name = name;
    this.bread = bread;
    this.meat = meat ;
    this.vegetables = vegetables;    
}


var Sandwich1 = new Sandwich('Black forest', 'Whole wheat', ['Ham', 'Bacon'], ['tomato', 'pickle', 'lettuce']);
var Sandwich2 = new Sandwich('Chicken Bacon', 'white', ['Chicken', 'Bacon'], ['lettuce', 'tomato', 'onion']);
var Sandwich3 = new Sandwich('Oven Oasted chicken', 'Rye','Chicken', ['lettuce', 'pickles', 'onion']);
var Sandwich4 = new Sandwich('Meatball Marinera', 'Brown', 'Meat balls', ['onion', 'garlic']);
var Sandwich5 = new Sandwich('Italian B.M.T', 'Baguette', ['Ham', 'pepproni', 'sausages'], ['olives', 'bell pepper', 'onions']);
var Sandwich6 = new Sandwich('Roasted Beef', 'White', ['Beef', 'Bacon'], ['lettuce', 'avocado', 'tomato']);
var Sandwich7 = new Sandwich('Sweet Onion Chicken Teriyaki', 'Baguette', ['Hame', 'Chicken', 'Bacon'], ['onion', 'bell pepper', 'lettuce']);
var Sandwich8 = new Sandwich('classic tuna turkey breast' , 'White', 'Tuna', ['Onion', 'lettuce']);
var Sandwich9 = new Sandwich('Turkey Breast', 'Whole wheat', 'turkey', ['Tomato', ' lettuce', 'cucomber', 'onion']);
var Sandwich10 = new Sandwich('Steak & cheese', 'white', ['Steak', 'Bacon'], ['Tomato', 'pepper', 'Bell pepper', 'avocado']);

console.log(Sandwich1);
console.log(Sandwich2);
console.log(Sandwich3);
console.log(Sandwich4);
console.log(Sandwich5);
console.log(Sandwich6);
console.log(Sandwich7);
console.log(Sandwich8);
console.log(Sandwich9);
console.log(Sandwich10);
