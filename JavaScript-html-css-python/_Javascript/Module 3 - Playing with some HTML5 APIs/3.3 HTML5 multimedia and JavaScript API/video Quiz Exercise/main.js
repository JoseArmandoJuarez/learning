window.onload = init;
console.log("Page loaded");

var myvideo;

function init() {
  myvideo = document.querySelector("#myvideo");
}

function playVideo() {
  myvideo.play();
}
function pauseVideo() {
  myvideo.pause();
}
function stopVideo() {
  myvideo.load();
}
function rewindVideo() {
  myvideo.currentTime = 0;
}
