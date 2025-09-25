function updatePartenerImage(){
    var partners = [];
    var fileNames = [];
    var imageList = [];
    var image; 
    var openList = "<li class='partner'>";
    var closeList = "</li>";

    for(var i=0; i<6; i++){
        fileNames.push("partner-" + (i+1));
        partners.push("<img src='images/partners/"+fileNames[i]+ ".png' >");
        image = openList + partners[i] + closeList;
        imageList.push(image);
    }
    document.getElementById("partners").innerHTML = imageList;
}
updatePartenerImage();