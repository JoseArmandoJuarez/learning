function multiply(n1, n2) {
    return n1 * n2;
  }
  //invoke it in the console:
  multiply(3, 4);
  // 12
  
  //using call() - window refers to this which is the window
  multiply.call(window, 3, 4);
  // 12



  //ANOTHER EXAMPLE

var mockingbird = {
    title: 'To Kill a Mockingbird',
    describe: function () {
      console.log(`${this.title} is a classic novel`);
    }
};

//We can have mockingbird invoke its own describe() method:
mockingbird.describe();
// 'To Kill a Mockingbird is a classic novel'

//Using call(), however, the following pride object can utilize mockingbird's describe() method:  
var pride = {
    title: 'Pride and Prejudice'
};
  
mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'







//ANOTHER EXAMPLE

var andrew = {
  name: 'Andrew'
};

function introduce(language) {
  console.log(`I'm ${this.name} and my favorite programming language is ${language}.`);
}

console.log(introduce.call(andrew, 'JavaScript'));