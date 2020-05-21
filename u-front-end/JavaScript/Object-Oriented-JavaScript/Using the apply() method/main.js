function multiply(n1, n2) {
    return n1 * n2;
}
  
//Using apply(), however, we collect all of the multiply() function's arguments in an array! 
//Then, we pass that entire array into apply():
multiply.apply(window, [3, 4]);
//output -  12



//ANOTHER EXAMPLE

var mockingbird = {
    title: 'To Kill a Mockingbird',
    describe: function () {
      console.log(`${this.title} is a classic novel`);
    }
  };
  
  
var pride = {
    title: 'Pride and Prejudice'
};


mockingbird.describe.apply(pride);
// 'Pride and Prejudice is a classic novel'