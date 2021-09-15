$(document).ready(function() {

    $("#move_up").click(function() {
        // The code for what will happen when the button is pressed will go between these curly braces (aka the “code block”).
        $("#change_me").animate({
            top: 30
        }, 200);
    }); //end move_up

    $("#move_down").click(function() {
        // The code for what will happen when the button is pressed will go between these curly braces (aka the “code block”).
        $("#change_me").animate({
            top: 500
        }, 2000);
    }); //end move_down

    $("#color").click(function() {
        // The code for what will happen when the button is pressed will go between these curly braces (aka the “code block”).
        $("#change_me").css("color", "purple");
    }); //end color

    $("#disappear").click(function() {
        // The code for what will happen when the button is pressed will go between these curly braces (aka the “code block”).
        $("#change_me").toggle("slow");
    }); //end disappear
}); //end doc ready