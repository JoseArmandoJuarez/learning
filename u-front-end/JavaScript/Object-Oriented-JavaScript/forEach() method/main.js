
//n is the currentValue in the array
//note - can also pass an anonymouse function as an argument (no need to give the function a name)
[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n){
    
    // if n is not an even number then log the number in the console
    if (n % 2 !== 0){
        console.log(n);
    }
});

//output - 1, 5, 3


//ANOTHER EXAMPLE
//****************

var favoriteFlavors = ['cookie dough', 'salted caramel', 'tofee'];

                                //flavor is the current vlaue of favoriteFlavors
                                // it goes one by one through the array
favoriteFlavors.forEach(function (flavor){
    console.log('I enjoy ' + flavor + ' ice cream');
});


//ANOTHER EXAMPLE
//****************

function logNum(num){
    console.log(num);
}

[1, 2, 3, 4, 5].forEach(logNum);