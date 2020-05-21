
var a, b, c;

function calculate(a, b, c){

    var a = document.getElementById("aNum").value;
    console.log("a = " + a);
    var b = document.getElementById("bNum").value;
    console.log("b = " + b);
    var c = document.getElementById("cNum").value;
    console.log("c = " + c);

    var delta = (b*b) - (4*a*c);
    console.log("delta = " + delta);

    var work1 = -b + (Math.sqrt((b*b)-4*a*c))/2*a;
    console.log("work1  = " + work1);
    var work2 = -b - (Math.sqrt((b*b)-4*a*c))/2*a;
    console.log("work2  = " + work2);

    document.getElementById("delta").innerHTML = "Delta: " + delta;
    document.getElementById("x1").innerHTML = "x = : " + work1;
    document.getElementById("x2").innerHTML = "x = : " + work2;
}




var x = 15;
console.log("Before the while");
console.log(x);
while (x <= 60){
    x += x;
    console.log("after adding x to x");
    console.log(x);
    
    var y = 1;
    console.log("y = " + y);
    while(y < 3){
        y ++;
        console.log("y = " + y);
        console.log("go get a job as a garbage collector");
    }
    console.log("y = " + y);
}
console.log("After the while");
console.log(x);





// var x = 30;
// var y = 1;
// console.log("Before the do while");
// console.log(x);

// do{
//     x += x;
//     console.log("x = " + x);
    

//     //var y = 1;
//     console.log("y = " + y);
//     do{
//         y++;
//         console.log("y = " + y);
//         console.log("after the operation");
//     }while(y < 3);
//     console.log("y = " + y);

// }while(x <= 60);

// console.log("after the while loop");
// console.log(x);



//long form
// for(var i = 0; i <= 10; i= i + 2)
// {
//     console.log(i);
// }

// //short form
// for(var x = 0; x <= 10; x+=2)
// {
//     console.log(x);
// }


// var jose = {
//     familyName: 'Juarez',
//     givenName: 'Jose',
//     age: 18
// }

// console.log(jose["familyName"]);

// var myName = jose["familyName"];
// console.log(myName);

// for (var property in jose)
// {
//     console.log(property); //only the property

//     console.log(jose[property]); //displays what's inside the property
// }

// var colors = ['blue', 'red','yellow'];

// for (var color in colors)
// {
//     console.log(colors[color]);

// }







 for(var i = 1, k = 0; i < 5; i++) {
     if (i === 3) {
         console.log("i===3");
        console.log("i = " + i);
         console.log("k = " + k);
         continue;
     }
    console.log("after condition i = " + i);
 
    k = k + 2*i;
    console.log('k += ' + (2*i));
}
console.log('Final k value:' + k)