/**
 * jQuery selects elements the same way CSS does: with selectors.
 * Just about any kind of HTML element is fair game for a jQuery selector.
 * $(this) — Selects the current element.
 */
$(document).ready(function() {
    $(".guess_box").click(function(e) {
        $(".guess_box p").remove();
        var discount = Math.floor((Math.random() * 5) + 5);
        var discount_msg = "<p>Your Discount is " + discount + "%</p>";
        $(this).append(discount_msg); //$(this) — Selects the current element.
    });
});