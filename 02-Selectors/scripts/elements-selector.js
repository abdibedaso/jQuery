/**
 * jQuery selects elements the same way CSS does: with selectors.
 * Just about any kind of HTML element is fair game for a jQuery selector.
 * $(“div") — Selects all the div elements on the page. 
 * $(“div p") — Selects all the p elements that are directly inside div elements.
 */
$(document).ready(function() {
    $(".guess_box").click(function(e) {
        $(".guess_box p").remove(); // $(.guess_box p") — Selects all the p elements that are directly inside guess_box class.
        $("div p").remove(); // $(“div p") — Selects all the p elements that are directly inside div elements.
        var discount = Math.floor((Math.random() * 5) + 5);
        var discount_msg = "<p>Your Discount is " + discount + "%</p>";
        $(this).append(discount_msg); //$(this) — Selects the current element.
    });
});