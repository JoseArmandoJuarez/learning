//Good practice: have a function

//call the function init only when the page has loaded and the DOM  is ready
//window.addEventListener('load', init);
//window.load = init;

function init(evt){
  //called when the page is loaded
  console.log("page loaded");
  
  let span = document.querySelector("#pageStatus");
  span.innerHTML = "PAGE LOADED";
  
  let b = document.querySelector("#myButton");
  //b.addEventListener('click', function(evt){
  //b.addEventListener('mousemove', function(evt){
  b.addEventListener('mousemove', function(evt){
    console.log("x = " + evt.clientX);
  })
}