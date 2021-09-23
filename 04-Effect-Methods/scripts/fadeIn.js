/**
 * jQuery Effects - jQuery fadeIn() Method
 * 
 * jQuery fadeIn() Method
 * The jQuery fadeIn() method is used to fade in a visible element.
 * 
 * $(selector).fadeIn(speed,callback);
 * 
 * The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.
 * The optional callback parameter is a function to be executed after the fading completes.
 * 
 */
$(document).ready(function() {
    $("#fadeIn").click(function() {
        $("p").fadeIn();
    });
    $("#fadeIn-slow").click(function() {
        $("p").fadeIn("slow");
    });
    $("#fadeIn-3000").click(function() {
        $("p").fadeIn(3000);
    });
});