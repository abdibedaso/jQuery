/**
 * What are Events?
 * All the different visitors' actions that a web page can respond to are called events.
 * An event represents the precise moment when something happens.
 * 
 * jQuery selects elements the same way CSS does: with selectors.
 * Event methods trigger or attach a function to an event handler for the selected elements.
 * 
 * jQuery mousedown() Method
 * The mousedown() method attaches an event handler function to an HTML element.
 * The function is executed, when the left, middle or right mouse button is pressed down, while the mouse is over the HTML element:
 * 
 */
$(document).ready(function() {
    $("#p1").mousedown(function() {
        alert("Mouse down over p1!");
    });
});