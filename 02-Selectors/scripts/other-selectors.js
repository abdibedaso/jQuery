/**
 * jQuery selects elements the same way CSS does: with selectors.
 * Just about any kind of HTML element is fair game for a jQuery selector.
 */
$("*") // Selects all elements
$(document).ready(function() {
    $("#all_selector").click(function() {
        $("*").hide();
    });
});

$("div:first") // Selects the first <div> element
$(document).ready(function() {
    $("#div_first_selector").click(function() {
        $("div:first").hide();
    });
});

$("ul li:first") // Selects the first <li> element of the first <ul>

$("ul li:first-child") // Selects the first <li> element of every <ul>

$("[href]") // Selects all elements with an href attribute

$("a[target='_blank']") // Selects all <a> elements with a target attribute value equal to "_blank"

$("a[target!='_blank']") // Selects all <a> elements with a target attribute value NOT equal to "_blank"

$(":button") // Selects all <button> elements and <input> elements of type="button"

$("tr:even") // Selects all even <tr> elements

$("tr:odd") // Selects all odd <tr> elements