//objects literals or singleton objects
let js1 = {
    courseName: 'JavaJScript into',
    weeks: 5,
    madeBy: 'W3Cx',
    author: 'Michel Buffa' //no ',' after thr las property
}                          //even if ES5/6 accept it.

console.log(js1.weeks); //displays 5
console.log(js1.author); //displays "Michel Buffa"

//--------------------------------------------

let darkVaderAsAnArray = ['villain', 'half human half machine'];

console.log(darkVaderAsAnArray[0]); //displays 'villain'
console.log(darkVaderAsAnArray[1]); //displays 'half human half machine'

//as an object
let darkVaderAsAnObject = {
    job: 'villain',
    race: 'half human half machine'
};

//both display the same thing
console.log(darkVaderAsAnObject.job); //displays 'villain'
console.log(darkVaderAsAnObject['job']); //same as using the '.'operator

console.log(typeof darkVaderAsAnObject); //displays "object"

//Another example
let book = {
    title: 'Le Petit Prince',
    author: 'Saint-Exupery'
};

console.log(book.title); //displays "Le Petit Prince"
console.log(book['title']); //diplays "Le Petit Prince"


// In JavaScript, objects are arrays whose indexes are property names


// Property declaration syntax
let louis = {age: 40};
//let louis = {"age": 40};
//let louis = {'age': 40};

// Properties that start with a number of have space in their name

// book.1stPublication = '6 avril 1943'; // begins with a number
                                      // Throws a SyntaxError
book['1stPublication'] = '6 avril 1943'; // OK
// book.date of publication = '6 avril 1943'; // spaces not allowed!
book['date of publication'] = '6 avril 1943'; // allowed, but avoid!

// Properties whose name is in a variable 
let key = 'title';
 
console.log(book[key]); //displays "Le Petit Prince"


//-----------------------------------------------

// An object can contain another object 
 let book2 = {
    name: 'Catch-22',
    published: 1961,
    author: {                 // embedded object!
        givenName: 'Joseph',
        familyName: 'Heller'
    }
};

console.log(book2.author); 
//displays
/*Object{
    familyName: "Heller",
    givenName: "Joseph"
} */

console.log(book2.author.familyName); //displays 'Heller'





var article = {
    name: "hammer",
    size: 2,
    brand: "no name",
    price: 20
}

var article2 = {
    name: "driller",
    size: 5,
    brand: "brand2",
    price: 50
}

var articles = [];

articles.push(article);
articles.push(article2);

console.log(articles);