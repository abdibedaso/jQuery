/**
 * jQuery Callback Functions
 * A callback function is executed after the current effect is 100% finished.
 * 
 * JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors.
 * To prevent this, you can create a callback function.
 * 
 * A callback function is executed after the current effect is finished.
 * 
 * $(selector).hide(speed,callback);
 * 
 */
$(document).ready(function() {

    $("#callback-hide").click(function() {
        $("p").hide("slow", function() {
            alert("The paragraph is now hidden!");
        });
    });

    $("#callback-show").click(function() {
        $("p").show("slow", function() {
            alert("The paragraph is now displayed!");
        });
    });

});