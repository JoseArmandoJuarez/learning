
//useful to have them as global variables
let canvas, ctx, w, h;
let mousePos;

//an empty array!
let balls = [];
let initialNumberOfBalls;
let globalSpeedMultiplier = 1;
let colorToEat = 'red';
let wrongBallsEaten = goodBallsEaten = 0;
let numbersOfGoodBalls;

//SOUND
letballEatenSound;

//Player as a singleton/simple object
let player = {
    x: 10,
    y: 10,
    width: 20,
    height: 20,
    color: 'red',

    move(x, y){
        this.x = x;
        this.y = y;
    },

    draw(ctx){
        //draw the player at its current position
        //with current width, height and color
        //Good practice: save the context, use 2D transformations
        ctx.save();
    // translate the coordinate system, draw relative to it
    ctx.translate(this.x, this.y);
  
    ctx.fillStyle = this.color;
    // (0, 0) is the top left corner of the monster.
    ctx.fillRect(0, 0, this.width, this.height);
  
    // GOOD practice: restore the context
    ctx.restore();    
  }
}

window.onload = function init() {
    // called AFTER the page has been loaded
  
    // Start playing the background music as soon as the page has loaded
    playBackgroundMusic();
  
    canvas = document.querySelector("#myCanvas");
  
    // often useful
    w = canvas.width; 
    h = canvas.height;  
  
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
  
    // start game with 10 balls, balls to eat = red balls
    startGame(10);
  
    // add a mousemove event listener to the canvas
    canvas.addEventListener('mousemove', mouseMoved);

    // Load the sound and start the game only when the sound has been loaded
    ballEatenSound = new Howl({
                urls: ['https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/plop.mp3'],
                onload: function () {
                  // start the animation
                    mainLoop();
                }
            });
  
};

function playBackgroundMusic() {
   let audioPlayer = document.querySelector("#audioPlayer");
   audioPlayer.play();
}

function pausebackgroundMusic() {
   let audioPlayer = document.querySelector("#audioPlayer");
   audioPlayer.pause();  
}

function startGame(nb) {
  do {
    balls = createBalls(nb);
    initialNumberOfBalls = nb;
    numberOfGoodBalls = countNumberOfGoodBalls(balls, colorToEat);
  } while(numberOfGoodBalls === 0);
  
  wrongBallsEaten = goodBallsEaten = 0;
}

function countNumberOfGoodBalls(balls, colorToEat) {
  let nb = 0;
  
  balls.forEach(function(b) {
    if(b.color === colorToEat)
      nb++;
  });
  
  return nb;
}

//===== CALLED BY GUI WHEN THE USER USES INPUT FIELDS
function changeNbBalls(nb) {
  startGame(nb);
}

function changeColorToEat(color) {
  colorToEat = color;
}

function changePlayerColor(color) {
  player.color = color;
}

function changeBallSpeed(coef) {
    globalSpeedMutiplier = coef;
}

//==== CALLED WHEN A USER USES ITS MOUSE
function mouseMoved(evt) {
    mousePos = getMousePos(canvas, evt);
}

function getMousePos(canvas, evt) {
    // necessary work in the canvas coordinate system
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

//==== MAIN ANIMATION GAME LOOP
function mainLoop(){
  //1 - clear the canvas
}