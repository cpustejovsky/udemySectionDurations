/*
This line of code is meant to be put into the console.
DO NOT PUT INTO CONSOLE UNLESS YOU EITHER TRUST WHERE YOU GOT THIS CODE OR UNDERSTAND JAVASCRIPT
*/

function udemySectionDurations(startingSection, endingSection) {
    // Inspect the duration element on your browser to find the updated class name
    var durations = document.documentElement.getElementsByClassName('curriculum-item--duration--1OEOp');
    var count = 0;
    for (var i = (startingSection-1); i < (endingSection); i++) {
        durationAsString = durations[i].innerHTML;
        // This logs all of the durations to help you make sure you picked the correct start and end points
        console.log(durationAsString);
        if (durationAsString === "") {
            continue;
        } else {
            if (durationAsString.length === 4) {
                durationAsString = "0" + durationAsString;
            }
            /*
            tens (minutes): [0]
            ones (minutes): [1]
            colon: [2]
            tens (seconds): [3]
            ones (seconds): [4]
            */
           durationAsString.split(':');
           var seconds = parseFloat(durationAsString[0]) * 600 + parseFloat(durationAsString[1]) * 60 + parseFloat(durationAsString[3]) * 10 + parseFloat(durationAsString[4]);
           count += seconds;
        }
    };
    console.log("The selected lectures are " + count + " seconds long.");
    console.log("The selected lectures are " + (count/60) + " minutes long.");
    console.log("The selected lectures are " + (count/3600) + " hours long.");
}
