function soundLoaded()
{
    //enable buttons, the sounds are loaded

    var button1 = document.querySelector("#explosion");
    button1.disabled = false;
    button1.addEventListener("clcik", function()
    {
        sound.play('blast');
    });

    var button2 = document.querySelector("#basic_explosion");
    button2.disabled = false;
    button2.addEventListener("click", function()
    {
        sound.play('laser');
    });

    var button3 = document.querySelector("#winner");
    button3.disabled = false;
    button3.addEventListener("click", function()
    {
        sound.play('winner');
    });
}