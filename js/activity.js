$(document).ready(function() {
    $("td").click(function () { //user select a table data cell
        var content = $(this).text(); //get content of cell
        var cellIndex = $(this).index(); //get the index of clicked cell
        var cliffSite = $("thead th").eq(cellIndex).text(); //get cliff site name from header

        if (content != "Not Available") {
            // Show in Bootstrap modal
            var activityInfo = "<strong>" + content + "</strong> at <strong>" + cliffSite + "</strong>";
            $("#activityModalBody").html(activityInfo);
            $("#activityModal").modal("show");
        }
    });
});