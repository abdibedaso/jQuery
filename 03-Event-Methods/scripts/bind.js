/**
 * What are Events?
 * All the different visitors' actions that a web page can respond to are called events.
 * An event represents the precise moment when something happens.
 * 
 * jQuery selects elements the same way CSS does: with selectors.
 * Event methods trigger or attach a function to an event handler for the selected elements.
 * 
 * jQuery bind() Method
 * $(selector).bind(event,data,function,map)
 * The bind() method was deprecated in version 3.0. Use the on() method instead.
 */
$(document).ready(function() {
    $("#bind").bind("click", function() {
        alert("Bind was clicked.");
    });
});