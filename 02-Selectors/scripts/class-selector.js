/**
 * jQuery selects elements the same way CSS does: with selectors.
 * Just about any kind of HTML element is fair game for a jQuery selector.
 * $(“.my_class") — Selects all the elements with the my_class class.
 * $(“div.my_class") — Selects only the divs that have the my_class class. (Different types of elements can share a class.)
 */
$(document).ready(function() {
    $(".guess_box").click(function(e) { // $(“.my_class") — Selects all the elements with the my_class class.
        $(".guess_box p").remove(); // $(.guess_box p") — Selects all the p elements that are directly inside guess_box class.
        var discount = Math.floor((Math.random() * 5) + 5);
        var discount_msg = "<p>Your Discount is " + discount + "%</p>";
        $(this).append(discount_msg); //$(this) — Selects the current element.
    });
});