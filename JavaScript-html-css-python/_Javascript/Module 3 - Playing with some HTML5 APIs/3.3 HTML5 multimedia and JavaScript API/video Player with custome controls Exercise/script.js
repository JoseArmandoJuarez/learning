
window.onload = init;

var myVideo;
var mute;
var currentVideo = 0;

var playlist = [
  "http://html5doctor.com/demos/video-canvas-magic/video.mp4", //video 1
  "http://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4" //video 2 
];

// Set the src of the video to the next URL in the playlist
// If at the end then start again from beginning
function loadNextVideo() {
  //The % loops between 0 and the number of videos
  myVideo.src = playlist[currentVideo % playlist.length]
 
  myVideo.load();
  currentVideo++;
}
      
// listener plays the video
function loadAndplayNextVideo() {
  console.log("playing " + playlist[currentVideo % playlist.length])
  loadNextVideo();
  myVideo.play();
}

function init(){
    console.log("PAge loaded, DOM is ready!");

    /*
    using the DOM API we get the JavaScript object that 
    corresponds to the video element we inserted in the HTML document. 
    This line is outside a function, it will be executed when the page loads.
    */
    myVideo = document.querySelector("#myPlayer");

    myVideo.ontimeupdate = displayTimeWhileVideoIsPlaying;
    myVideo.addEventListener('ended', loadAndplayNextVideo, false);

    loadNextVideo();
}

//Call methods from the APIfor playing/pausing the video
function playVideo(){
    myVideo.play();
}

function pauseVideo(){
    myVideo.pause();
}

/* 
    Modify the currentTime property in order to rewind the video.
    vid.load() also rewinds the video, shows the poster image again,
    but also pauses the video. 
    By using currentTime = 0 the playback does not work
*/
function rewindVideo(){
    myVideo.currentTime = 0;
}

function muted(){
  myVideo.muted = true;
}

function toggleMute(){
    if(myVideo.muted) {
    myVideo.muted = false;
   } else {
    myVideo.muted = true;
  }
}

function displayTimeWhileVideoIsPlaying(evt){
    console.log(myVideo.currentTime);

    // //test
    // if(vid.currentTime > 5){
    //     vid.pause();
    // }
}