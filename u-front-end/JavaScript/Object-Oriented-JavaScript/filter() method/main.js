const names = ['David', 'Richard', 'Veronika'];

//call filter() on the names array and pass it a function as an argument:
const shortNames = names.filter(function(name){

    //only return the element thats length is less than 6
    return name.length < 6;
});

console.log(shortNames);