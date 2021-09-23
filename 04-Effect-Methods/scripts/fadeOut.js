/**
 * jQuery Effects - jQuery fadeOut() Method
 * 
 * jQuery fadeOut() Method
 * The jQuery fadeOut() method is used to fade out a visible element.
 * 
 * $(selector).fadeOut(speed,callback);
 * 
 * The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.
 * The optional callback parameter is a function to be executed after the fading completes.
 * 
 */
$(document).ready(function() {
    $("#fadeOut").click(function() {
        $("p").fadeOut();
    });
    $("#fadeOut-slow").click(function() {
        $("p").fadeOut("slow");
    });
    $("#fadeOut-3000").click(function() {
        $("p").fadeOut(3000);
    });
});