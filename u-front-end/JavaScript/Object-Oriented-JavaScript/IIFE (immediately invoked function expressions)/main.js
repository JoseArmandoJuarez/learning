(function (x, y){
    console.log(x * y);
  }
)(2, 3);





const myFunction = (
    function () {
      const hi = 'Hi!';
      return function () {
        console.log(hi);
      }
    }
  )();