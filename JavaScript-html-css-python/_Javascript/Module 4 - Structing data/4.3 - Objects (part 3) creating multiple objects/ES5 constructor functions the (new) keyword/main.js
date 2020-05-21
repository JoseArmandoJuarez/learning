// ES5 construction function
function Hero(name, side) {
    this.name = name;
    this.side = side;
    
    this.speak = function() {
      return "<p>My name is " + this.name +
        ", I'm with the " + this.side + ".</p>";
    }
}
  
//create different objects that will all share a name, 
//a side and a describeYourself properties and methods 
//but with different values that have been passed at
//construction time

//The 'new' operator is for constructing, for building objects
var darkVador = new Hero("Dark Vador", "empire");
var luke = new Hero("Luke Skywalker", "rebels");
var ianSolo = new Hero("Ian Solo", "rebels");

function makeHeroesSpeak() {
  document.body.innerHTML += darkVador.speak();
   document.body.innerHTML += luke.speak();
   document.body.innerHTML += ianSolo.speak();
}

  

//examples of building new objects using the 'new' keyword

/*
var car = new car('Ferrari', 'red');
var luke = new Hero('Luke Skywalker', 'rebels');
var ball1 = new Ball(10, 10, 20, 'blue'); // x=10, y=10, radius = 20, color = 'blue'
var p1 = new Product('Epson printer P1232', '183', 'Mr Buffa'); // ref, price, customer
*/