/**
 * We use jQuery function to select elements from an HTML page to manipulate.
 * The $ shortcut means you don't have to type “jQuery" over and over.
 * The jQuery function can handle selectors, straight HTML, and even JavaScript objects. 
 */
$(document).ready(function() {
    $("#clickMe").click(function() {
        // The code for what will happen when the button is pressed will go between these curly braces (aka the “code block”).
        $("img").fadeIn(1000); // When an element fades in, it goes from being invisible (transparent) to being visible (opaque).
        $("#picframe").slideToggle("slow"); //The slideToggle action says, “If it’s up, slide it down; if it’s down, slide it up.”
    });
});