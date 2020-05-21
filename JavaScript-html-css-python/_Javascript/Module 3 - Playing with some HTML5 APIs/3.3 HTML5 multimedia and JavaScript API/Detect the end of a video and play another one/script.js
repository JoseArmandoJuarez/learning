var myVideo;

var currentVideo = 0;
//Array tha contains the URLs of the videos in the playlist.
var sources = [
  "http://html5doctor.com/demos/video-canvas-magic/video.mp4", //video 1
  "http://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4" //video 2 
];
      
// Set the src of the video to the next URL in the playlist
// If at the end then start again from beginning
function loadNextVideo() {
  //The % loops between 0 and the number of videos
  myVideo.src = sources[currentVideo % sources.length]
 
  myVideo.load();
  currentVideo++;
}
      
// listener plays the video
function loadAndplayNextVideo() {
  console.log("playing " + sources[currentVideo % sources.length])
  loadNextVideo();
  myVideo.play();
}
      
// Called when the page is loaded
function init(){
// get the video element using the DOM api
myVideo = document.querySelector("#myVideo");
          
// Define a callback function called each time a video ended
myVideo.addEventListener('ended', loadAndplayNextVideo, false);
          
/* 
used the DOM to get the JavaScript object corresponding to the video element, 
then defined a listener for the ended event. Each time a video ends, 
the loadAndPlayNextVideo() callback will be called. As the video element has 
no src attribute by default, we also preload the first video
*/
          
// Load the first video when the page is loaded.
loadNextVideo();
}