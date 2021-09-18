/**
 * What are Events?
 * All the different visitors' actions that a web page can respond to are called events.
 * An event represents the precise moment when something happens.
 * 
 * jQuery selects elements the same way CSS does: with selectors.
 * Event methods trigger or attach a function to an event handler for the selected elements.
 * 
 * jQuery click() Method
 * $(selector).click(function)
 * The click() method triggers the click event, or attaches a function to run when a click event occurs.
 * 
 */
$(document).ready(function() {
    $("p").click(function() {
        alert("The paragraph was clicked.");
    });
});