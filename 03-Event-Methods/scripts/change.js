/**
 * What are Events?
 * All the different visitors' actions that a web page can respond to are called events.
 * An event represents the precise moment when something happens.
 * 
 * jQuery selects elements the same way CSS does: with selectors.
 * Event methods trigger or attach a function to an event handler for the selected elements.
 * 
 * jQuery change() Method
 * $(selector).change()
 * $(selector).change(function)
 * The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements).
 * The change() method triggers the change event, or attaches a function to run when a change event occurs.
 * 
 */
$(document).ready(function() {
    $("input").change(function() {
        alert("The input has changed.");
    });
});