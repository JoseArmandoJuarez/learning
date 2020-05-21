
window.onload = init;

let vid;

function init(){
    console.log("PAge loaded, DOM is ready!");

    /*
    using the DOM API we get the JavaScript object that 
    corresponds to the video element we inserted in the HTML document. 
    This line is outside a function, it will be executed when the page loads.
    */
    vid = document.querySelector("#myPlayer");

    vid.ontimeupdate = displayTimeWhileVideoIsPlaying;
}

//Call methods from the APIfor playing/pausing the video
function playVideo(){
    vid.play();
}

function pauseVideo(){
    vid.pause();
}

/* 
    Modify the currentTime property in order to rewind the video.
    vid.load() also rewinds the video, shows the poster image again,
    but also pauses the video. 
    By using currentTime = 0 the playback does not work
*/
function rewindVideo(){
    vid.currentTime = 0;
}

function displayTimeWhileVideoIsPlaying(evt){
    console.log(vid.currentTime);

    // //test
    // if(vid.currentTime > 5){
    //     vid.pause();
    // }
}