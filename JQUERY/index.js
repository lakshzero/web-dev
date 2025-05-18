//$(document).ready(function(){ used for checking if jquey is ready or not
    
   // $("h1").css("color", "red"); style manipulation

//});
// we used the above document.ready to ensure jquery is read before code is excuted of jquery

//for selecting elemnts in jquery we have.- : $("h1") so we dont have to write document.querselector("button")an so so

$("h1").addClass("big-title , margin");

$("button").html("<em>hello</em>") ;//for just changing text use .text

$("a").attr("href", "https://www.yahoo.com/")

$("button").click(function() {//for click
  $("h1").css("color","purple");
});

$(document).keydown(function(event) {//for keystrokes
   $("h1").text(event.key);
});

$(document).on("mouseover",function() {//for keystrokes
   $("h1").css("color","Beige");
});
