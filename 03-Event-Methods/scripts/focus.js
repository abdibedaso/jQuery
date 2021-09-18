/**
 * What are Events?
 * All the different visitors' actions that a web page can respond to are called events.
 * An event represents the precise moment when something happens.
 * 
 * jQuery selects elements the same way CSS does: with selectors.
 * Event methods trigger or attach a function to an event handler for the selected elements.
 * 
 * jQuery focus() Method
 * The focus() method attaches an event handler function to an HTML element.
 * The function is executed when the form field gets focus:
 * 
 */
$(document).ready(function() {
    $("input").focus(function() {
        $(this).css("background-color", "#cccccc");
    });
});