/**
 * What are Events?
 * All the different visitors' actions that a web page can respond to are called events.
 * An event represents the precise moment when something happens.
 * 
 * jQuery selects elements the same way CSS does: with selectors.
 * Event methods trigger or attach a function to an event handler for the selected elements.
 * 
 * jQuery mouseup() Method
 * The mouseup() method attaches an event handler function to an HTML element.
 * The function is executed, when the left, middle or right mouse button is released, while the mouse is over the HTML element:
 * 
 */
$(document).ready(function() {
    $("#p1").mouseup(function() {
        alert("Mouse up over p1!");
    });
});