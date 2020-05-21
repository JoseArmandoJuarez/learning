var target = {};

var source = { number: 7 };

Object.assign(target, source);

console.log(target);
// { number: 7 }



//ANOTHER EXAMPLE
var target = { letter: 'a', number: 11 };

var source = { number: 7 };

Object.assign(target, source);

console.log(target);
// { letter: 'a', number: 7 } - number 7 replace number 8





//ANOTHER EXAMPLE WITH MULTIPLE OBJECTS
var duck = {
    hasBill: true,
    feet: "orange"
};
var beaver = {
    hasTail: true
};
var otter = {
    hasFur: true,
    feet: 'webbed'
};
  
//create a target object called platypus
var platypus = Object.assign({}, duck, beaver, otter);
  
console.log(platypus);
//The reason feet is "webbed" and not "orange" is because "webbed" is after "orange" 
//and what ever comes last is placed by the one in front
//*THE ORDER MATTERS*

//output - { hasBill: true, feet: "webbed", hasTail: true, hasFur: true, feet: 'webbed' }