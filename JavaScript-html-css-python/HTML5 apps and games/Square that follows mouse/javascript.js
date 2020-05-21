var canvas, ctx, width, height;
var rect = {
    x: 40, y: 40,
    radius: 30,
    width:40, height:40,
    v:3
};

var mousepos = {x:0, y:0};

function init(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    canvas.addEventListener('mousemove', function(evt){
        mousepos = getMousePos(canvas, evt);
    }, false);
    mainloop();
}

function mainloop() {
    function mainloop(){
        //1) clear screen
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //2) move object
        var dx = rect.x - mousepos.x;
        var dy = rect.y - mousepos.y;

        /*With atan2(), the y coordinate is passed as the first 
        argument and the x coordinate is passed as the second argument.*/
        /*Math.atan2 returns the arctangent if the quotient of its arguments 
        as a numeric value between PI and -PI radians*/
        /*The number returned represents the counterclockwise angle in radians 
        (not degrees) between the positive X axis and the point(x, y)*/
        var angle = Math.atan2(dy, dx)

        rect.x -= rect.v*Math.cos(angle);
        rect.y -= rect.v*Math.sin(angle);

        //3) draw object
        drawRectangle(angle);

        //4) request new frame
        window.requestAnimationFrame(mainloop);
    }

    function drawRectangle(angle){
        ctx.save();

        //these two lines move the 
    }
}