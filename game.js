var gamepattern = [];
level=0;
var patternCount;
function animation(hello) 
{
    $("#"+hello).addClass("pressed");
    setTimeout(function () {
        $("#" + hello).removeClass("pressed");
      }, 100);
    var audio = new Audio("sounds/" + hello + ".mp3");
    audio.play();

}
function nextSequence()
{
    patternCount=0;
    var randomnumber = Math.floor(Math.random()*3+1);
    var buttoncolors = ["red", "blue", "green", "yellow"];
    var randomchosencolour = buttoncolors[randomnumber];
    gamepattern.push(randomchosencolour);
    $("#"+randomchosencolour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomchosencolour + ".mp3");
    audio.play();
    level++;
    $("#level-title").html(" Level : " + level);;
}
function gameover()
{
    level=0;
    $("#level-title").html(" GAME OVER. <br> PRESS A BUTTON TO RESTART ");
    $(".bdy").css("background-color","red");
    setTimeout(function () {
        $(".bdy").css("background-color","#011F3F");
      }, 250);
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
}
$(document).keypress(function()
{
    if(level===0){
        gamepattern = [];
        level=0;
        nextSequence();
    }
});

$(".btn").on("click",function(e){
    animation(e.target.id);
    response(e);
});
function response(e)
{

    if(e.target.id===gamepattern[patternCount])
    {
        patternCount++;
        if(patternCount===level)
        {
            setTimeout(function(){
                nextSequence();
            },810);
        }
    }
    else
    {
        gameover();
    }

}