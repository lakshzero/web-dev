var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0 ;

function nextSequence(){

    userClickedPattern = [];//Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.

    level++;

    $("#level-title").text("Level " + level);

    var random = Math.floor(Math.random() * 4);   //since exclusive of  1 so 4 is taken .
    var randomChosenColour = buttonColors[random];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

$(".btn").click(function (){

   var userChosenColour = $(this).attr("id");

   userClickedPattern.push(userChosenColour);

   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1);

});

function playSound(name){
    var audio= new Audio("sounds/"+name+".mp3");
    audio.play();
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);

}

$(document).keydown(function(){
    if(!started)
    nextSequence();
started = true;
})

function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){

    console.log("success");

    setTimeout(function () {
        nextSequence();
      }, 1000);

}
else{
    console.log("wrong");

    playSound("wrong");
    $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
     startOver();
}
}
function startOver(){
    level= 0;
    gamePattern= [];
    started = false;
}