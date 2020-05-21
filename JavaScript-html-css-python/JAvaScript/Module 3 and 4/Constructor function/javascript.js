/*code outside of methods is usually for initilizing
code properties. Very often, they match the parameters*/

//ES5 construction function

function Hero(name, side){
    this.name = name; //property
    this.side = side; //property

    this.describeYourself = function(){
        console.log("I'm " + this.name + " and I'm from the " + this.side);

        return "<p> My name is " + this.name + ", I'm with the " + this.side + ".</p>";
    }
}

var HanSolo = new Hero ("Han Solo", "Rebels");
var lukeSkywalker = new Hero ("Luke Skywalker", "Rebels");
var darthVador = new Hero ("Darth Vador", "Empire");

function makeHeroesSpeak(){
    document.body.innerHTML += HanSolo.describeYourself();
    document.body.innerHTML += lukeSkywalker.describeYourself();
    document.body.innerHTML += darthVador.describeYourself();
}

/*ES6 created a class keyword and a constructor 
keyword, along with advanced concepts that will
be the subject of an "advanced Javascript" course*/

//using ES6 classes
/*
class Hero {
    //must be UNIQUE!, called when "new" is used
    constructor(name, side)
    {
        this.name = name;
        this.side = side;
    }

    //no "function" keyword here:
    speak(){
        return "<p>My Name is " + this.name + ", I'm with the " + this.side + ".</p>";
    }
}

var HanSolo = new Hero ("Han Solo", "Rebels");
var lukeSkywalker = new Hero ("Luke Skywalker", "Rebels");
var darthVador = new Hero ("Darth Vador", "Empire");

function makeHeroesSpeak(){
    document.body.innerHTML += HanSolo.describeYourself();
    document.body.innerHTML += lukeSkywalker.describeYourself();
    document.body.innerHTML += darthVador.describeYourself();
}
*/