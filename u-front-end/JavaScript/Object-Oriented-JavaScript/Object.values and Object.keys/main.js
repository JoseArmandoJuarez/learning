const iceCreamTotals = {
    Veronika: 600,
    Andrew: 711,
    Jessica: 818,
    David: 9001,
    Richard: 1000000
};

//One way to get the key : value
console.log(Object.keys(iceCreamTotals));

console.log(Object.values(iceCreamTotals));


//Another way is to use a for in loop

const result = [];

for(const name in iceCreamTotals){
    result.push(name);
}

console.log(result); //only gives the names of the properties