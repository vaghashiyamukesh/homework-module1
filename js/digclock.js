function currentTime(){
    var d = new Date(); //create a new date object
    var hour = d.getHours(); //get the current hour
    var min = d.getMinutes(); //get the current minute
    var sec = d.getSeconds(); //get the current second
    var ampm;
            // Convert GMT (UTC) hour to standard time
var d = new Date();
var utchr = d.getUTCHours();
var localhr = d.getHours();

// Calculate time difference between GMT and local hour
var timediff = localhr - utchr;

// Convert time difference to positive (adjusted time difference)
var adjTimeDiff = Math.abs(timediff);

// Determine time zone based on time difference
var timeZone = "";
switch (timediff) {
    case -8:
    case 16:
        timeZone = "PST";
        break;
    case -7:
    case 17:
        timeZone = "MST";
        break;
    case -6:
    case 18:
        timeZone = "CST";
        break;
    case -5:
    case 19:
        timeZone = "EST";
        break;
    default:
        timeZone = "GMT";

}

    if(sec < 10){
        sec = "0" + sec;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(hour == 12){
        ampm = "PM";
    } else if(hour > 12){
        hour = hour - 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    var time = hour + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    document.getElementById("clock").innerText = time;
    setInterval(currentTime, 1000);
}
currentTime();