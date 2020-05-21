//speak is called an "instamce method"
//they are used preceeding them by the name of the instance object
//Ex: luke.speak(), luke.name etc.

//class properties: define the characteristics of the class itself: How many heros have you built?
//Class methods will correspond to the behavior of the class Hero
class Hero{
    constructor(name, side){
        this.name = name;
        this.side = side;
        Hero.numberHerosCreated++;
    }

    static getHowManyHeroesYouCreated(){
        return Hero.numberHerosCreated;
    }

    //no "function" keyword here!
    speak(){
        console.log("ERROR: " + Hero.numberHerosCreated);
        return "<p>My name is " + this.name + ", I'm with the " + this.side + ".</p>";
    }
}

//This cannot be declared before the class as unlike functions
//classes must be declared before being used.
Hero.numberHerosCreated = 0;

//var darkVador = new Hero("Dark Vador", "empire");
var luke = new Hero("Luke Skywalker", "rebels");
//var ianSolo = new Hero("Ian Solo", "rebels");

function makeHeroesSpeak() {
  document.body.innerHTML += darkVador.speak();
   document.body.innerHTML += luke.speak();
   document.body.innerHTML += ianSolo.speak();
}
/*class properties should be defined after the class definition
and declared using the name of the class followed by .operator 
and the name of the property*/

//The static keyword defines a static method for a class
//Static methods are called without instantiating their class 
//and can not be called through a class instance. 
//The statice version
/*
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      // static property
      Point.nbPointsCreated++;
    }
  
    // static method
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt(dx*dx + dy*dy);
    }
  }
  // static property
  Point.nbPointsCreated=0;
  
  // We create 3 points
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  const p3 = new Point(12, 27);
  
  document.body.innerHTML += "<p>Distance between points (5, 5) and (10, 10) is " + 
                       Point.distance(p1, p2) + "</p>";
  document.body.innerHTML += "Number of Points created is " + Point.nbPointsCreated;
  */