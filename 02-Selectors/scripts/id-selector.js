/**
 * jQuery selects elements the same way CSS does: with selectors.
 * Just about any kind of HTML element is fair game for a jQuery selector.
 * $(“#my_id") — Selects the element that has the ID of my_id.
 */
$(document).ready(function() {
    $("#first_box").click(function(e) { // $(“#my_id") — Selects the element that has the ID of my_id.
        alert("First Box Clicked!");
    });

});