/**
 * What are Events?
 * All the different visitors' actions that a web page can respond to are called events.
 * An event represents the precise moment when something happens.
 * 
 * jQuery selects elements the same way CSS does: with selectors.
 * Event methods trigger or attach a function to an event handler for the selected elements.
 * 
 * $(document).ready() Method
 * $(document).ready() method allows us to execute a function when the document is fully loaded.
 */
$(document).ready(function() {
    alert("Document is fully loaded!");
});