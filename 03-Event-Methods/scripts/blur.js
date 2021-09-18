/**
 * What are Events?
 * All the different visitors' actions that a web page can respond to are called events.
 * An event represents the precise moment when something happens.
 * 
 * jQuery selects elements the same way CSS does: with selectors.
 * Event methods trigger or attach a function to an event handler for the selected elements.
 * 
 * jQuery blur() Method
 * $(selector).blur(function)
 * 
 * The blur event occurs when an element loses focus.
 * The blur() method triggers the blur event, or attaches a function to run when a blur event occurs.
 */
$(document).ready(function() {
    $("input").blur(function() {
        alert("This input field has lost its focus.");
    });
});