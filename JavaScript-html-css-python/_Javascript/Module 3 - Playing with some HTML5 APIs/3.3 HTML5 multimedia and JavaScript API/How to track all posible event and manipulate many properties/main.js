
function init(){
    var vid = document.getElementById('vid');
    console.log(vid);
    addListeners(vid);
}

function toggleNotes(){
    var notes = document.getElementsByClassName('note');
    //parseInt only return thes first string
    var isShowing = parseInt(window.getComputedStyle(notes[0], null).getPropertyValue("opacity"));

    for(var i=0; i<notes.length; i++){
        //what the heck does this line do?????
        notes[i].style.opacity = isShowing ? 0 : 1;

        //The only way I know is like this...
        // age = document.getElementById("age").value;
        // voteable = (age < 18) ? "Too young":"Old enough";
        // document.getElementById("demo").innerHTML = voteable + " to vote.";

        console.log(isShowing);
    }
    //toggle text to "show notes" or "Hide Notes"
    document.getElementById('notes').className = isShowing ? 'off' : 'on';
}

function addListeners(vid){
    /*add all event listeners for HTML5 media elements events*/

    //adds an eventListener called 'loadsstart' display the event 'logEvent' with the color '#000099'
    vid.addEventListener('loadstart', function(evt) { logEvent(evt,'#000099'); }, false);  
    
    vid.addEventListener('canplaythrough',function(evt) {  logEvent(evt,'#66CC33'); }, false);
    vid.addEventListener('canplay', function(evt) { logEvent(evt,'#66CC33'); }, false);
    vid.addEventListener('loadeddata', function(evt) { logEvent(evt,'#00CCCC'); }, false); 
    vid.addEventListener('loadedmetadata', function(evt) { logEvent(evt,'#00CCCC'); }, false);
          
    vid.addEventListener('abort', function(evt) { logEvent(evt,'red'); }, false);
    vid.addEventListener('emptied', function(evt) { logEvent(evt,'red'); }, false);
    vid.addEventListener('error', function(evt) { logEvent(evt,'red'); }, false);
    vid.addEventListener('stalled', function(evt) { logEvent(evt,'red'); }, false);
    vid.addEventListener('suspend', function(evt) { logEvent(evt,'red'); }, false);
    vid.addEventListener('waiting', function(evt) { logEvent(evt,'red'); }, false);
 
    vid.addEventListener('pause', function(evt) { logEvent(evt,'orange'); }, false);
    vid.addEventListener('play', function(evt) { logEvent(evt,'orange'); }, false);
    vid.addEventListener('volumechange', function(evt) { logEvent(evt,'orange'); }, false);
 
    vid.addEventListener('playing', function(evt) { logEvent(evt,'purple'); }, false);
 
    vid.addEventListener('seeked', function(evt) { logEvent(evt,'teal'); }, false);    
    vid.addEventListener('seeking', function(evt) { logEvent(evt,'teal'); }, false);    
 
    vid.addEventListener('durationchange', function(evt) { logEvent(evt,'#cc0066'); }, false);
    vid.addEventListener('progress', function(evt) { logEvent(evt,'#cc0066'); }, false);   
    vid.addEventListener('ratechange', function(evt) { logEvent(evt,'#cc0066'); }, false);   
 
    vid.addEventListener('timeupdate', function(evt) { logEvent(evt,'gray'); }, false);
 
    vid.addEventListener('ended', function(evt) { logEvent(evt,'#000099'); }, false); 
    
    vid.addEventListener('webkitbeginfullscreen', function(evt) { logEvent(evt,'#FF6666'); }, false); 
    vid.addEventListener('webkitendfullscreen', function(evt) { logEvent(evt,'#FF6666'); }, false);
}

//using a switch statment to see which property is being use
function logEvent(evt, color){
    var log = document.createElement("div");
    log.innerHTML = evt.type;
    log.style.color = color;

    var note = document.createElement("span");
    note.setAttribute('class', 'note');

    /*set the opacity of the note on the fly, based on whether
    notes are currenlty toggled on or off*/

    //what the heck does this line mean???????
    note.style.opacity = document.getElementById('notes').className == 'on' ? '1' : '0';

    //add a note describing what each event does
    switch (evt.type){
        case 'loadstart' :
        note.innerHTML = "begin loading media data";
        break;
    case 'progress':
        note.innerHTML = "fetching media...";
        break;
    case 'canplay':
        note.innerHTML = "can play, but will eventually have to buffer";
        break;
    case 'canplaythrough':
        note.innerHTML = "can play, won't have to buffer anymore";
        break;
    case 'loadeddata':
        note.innerHTML = "can render media data at current playback position";
        break;
    case 'loadedmetadata':
        note.innerHTML = "now we know duration, height, width, and more";
        break;
    case 'timeupdate':
        log.innerHTML += " " + evt.target.currentTime.toFixed(3);
        break;
    case 'durationchange':
        note.innerHTML = "new info about the duration";
        break;
    case 'volumechange':
        note.innerHTML = "volume or muted property has changed";
        break;
    case 'play':
        note.innerHTML = "just returned from the play function";
        break;
    case 'playing':
        note.innerHTML = "playback has started";
        break;
    case 'pause':
        note.innerHTML = "just returned from the pause function";
        break;
    case 'suspend':
        note.innerHTML = "loading has stopped, but not all of the media has downloaded";
        break;
    case 'waiting':
        note.innerHTML = "stopped playback because we're waiting for the next frame";
        break;
    case 'stalled':
        note.innerHTML = "fetching media data, but none is arriving";
        break;
    case 'webkitbeginfullscreen':
        note.innerHTML = "entering fullscreen mode";
        break;
    case 'webkitendfullscreen':
        note.innerHTML = "exiting fullscreen mode";
        break;
    case 'error':  
        var error = document.querySelector('video').error;
        switch (error.code) {
          case error.MEDIA_ERR_ABORTED:
            note.innerHTML = "fetching aborted at the user's request"; 
            break;
          case error.MEDIA_ERR_NETWORK:
            note.innerHTML = "a network error caused the browser to stop fetching the media"; 
            break;
          case error.MEDIA_ERR_DECODE:
            note.innerHTML = "an error occurred while decoding the media"; 
            break;
          case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            note.innerHTML = "the media indicated by the src attribute was not suitable"; 
            break;
          default:
            note.innerHTML = "an error occurred"; 
            break;
        }
        break;
    }

    //create the log message and append it to the events log
    log.appendChild(note);
    var eventslog = document.getElementById('eventslog');
    eventslog.insertBefore(log, eventslog.firstChild);


}