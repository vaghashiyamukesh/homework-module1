$(document).ready(function() {
    $("td").click(function () { //user select a table data cell
        var content = $(this).text(); //get content of cell
        var cellIndex = $(this).index(); //get the index of clicked cell
        var cliffSite = $("thead th").eq(cellIndex).text(); //get cliff site name from header
        
        if (content != "Not Available") { //check if content does not contain a particular string
            $(this).toggleClass("selectable"); //add or remove class when cell is selected

            if ($(this).hasClass("selectable")) { //check if selected cell has class
                $('#displaySelected').css("visibility","visible"); //make display box visible
                $('#displaySelected').css("margin-top","2em"); //add spaces above display box
                $('#result').append("<p>" + content + " at " + cliffSite + "</p><br>"); //add activity and location
            } else { //if selected cell don't have class
                $('#result p:contains('+content+')').remove(); //remove child element
                
                if ($('#result').has('p').length == false) { //check if there are any child elements within parent
                    $('#displaySelected').css("visibility","hidden"); //make display box hidden
                    $('#displaySelected').css("margin-top","0"); //remove spaces above display box
                }
            }
        }
    });
});