/**
 * What are Events?
 * All the different visitors' actions that a web page can respond to are called events.
 * An event represents the precise moment when something happens.
 * 
 * jQuery selects elements the same way CSS does: with selectors.
 * Event methods trigger or attach a function to an event handler for the selected elements.
 * 
 * jQuery unbind() Method
 * The unbind() method was deprecated in version 3.0. Use the off() method instead.
 */
$(document).ready(function() {
    $("#unbind").click(function() {
        $("#bind").unbind(); //Remove all event handlers for #bind element:
        alert("Unbind was clicked.");
    });
});