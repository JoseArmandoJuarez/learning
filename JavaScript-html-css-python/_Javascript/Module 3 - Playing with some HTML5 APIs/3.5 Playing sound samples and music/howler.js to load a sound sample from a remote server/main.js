window.onload = init;

var sound;

function init(){
    var button = document.querySelector("#button1");

    sound = new HTML({
        urls: ['https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/plop.mp3'],
        //The function after onload: will be executed
        onload: function(){
            console.log("Loaded asset ");
            button.disabled = false; //enabled the play sound button
        }
    })
}