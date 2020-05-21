
var displayCoords = document.getElementById("msg");
  
function getLocation() {
  //checks if the web browser supports the geolocation API 
  //by testing the variable navigator.geolocation.
  //if not null, then the geolocation API is supported
  if (navigator.geolocation) {
    // passing a callback function as a parameter
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    displayCoords.innerHTML="Geolocation API not supported by your browser.";
  }
}
  
//the position objects has a coords property that is the object that holds the longitude and the latitude
function showPosition(position) {
 displayCoords.innerHTML="Latitude: " + position.coords.latitude + 
  "<br />Longitude: " + position.coords.longitude;	
}