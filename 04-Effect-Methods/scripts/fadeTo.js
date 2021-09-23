/**
 * jQuery Effects - jQuery fadeTo() Method
 * 
 * jQuery fadeTo() Method
 * The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1).
 * 
 * $(selector).fadeTo(speed,opacity,callback);
 * 
 * The required speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.
 * The required opacity parameter in the fadeTo() method specifies fading to a given opacity (value between 0 and 1).
 * The optional callback parameter is a function to be executed after the function completes.
 * 
 */
$(document).ready(function() {
    $("#fadeTo-0_15").click(function() {
        $("p").fadeTo("slow", 0.15);
    });
    $("#fadeTo-0_7").click(function() {
        $("p").fadeTo("slow", 0.7);
    });
});