$(document).ready(function() {
    $('table tbody td:not(:first-child)').each(function() {
        if ($(this).text().trim() !== "Not Available") {
            $(this).addClass('selectable');
        }
    });

    $('.selectable').click(function() {
        // Toggle the selected class on click
        $(this).toggleClass('selected');
    });
});
