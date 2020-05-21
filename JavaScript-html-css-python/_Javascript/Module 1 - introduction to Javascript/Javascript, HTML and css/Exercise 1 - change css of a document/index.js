function changeColor() {
    var title = document.querySelector("#color");
    title.style.color = 'red';
  }


  function changeTitle() {
    var title = document.querySelector("#mainTitle");
    title.innerHTML += "<br>this is cool";
    title.style.color = 'white';
    title.style.backgroundColor = "black";
    title.style.border = "5px dashed yellow";
  }