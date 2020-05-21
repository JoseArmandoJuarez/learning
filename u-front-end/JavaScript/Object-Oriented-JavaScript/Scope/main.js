var n = 8;

function functionOne(){
    var n = 9;

    function functionTwo(){
        var n = 10;
        console.log(n); //First log - 10
    }

    functionTwo();
    console.log(n); //second log - 9
}

functionOne();
console.log(n); //Third log - 8