/**
 * jQuery Method Chaining
 * 
 * With jQuery, you can chain together actions/methods.
 * Chaining allows us to run multiple jQuery methods (on the same element) within a single statement.
 * 
 * This way, browsers do not have to find the same element(s) more than once.
 * To chain an action, you simply append the action to the previous action.
 * 
 * A callback function is executed after the current effect is finished.
 * 
 * $(selector).hide(speed,callback);
 * 
 */
$(document).ready(function() {

    $("#chain").click(function() {
        $("p").slideUp(200).css("color", "red").slideDown(500);
    });

});