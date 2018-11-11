function udemySectionLimiter (startingSection, limiterInMinutes) {
    // Inspect the duration element on your browser to find the updated class name
    var durations = document.documentElement.getElementsByClassName('curriculum-item--duration--1OEOp');
    var count = 0;
    var limiter = 60*(parseFloat(limiterInMinutes));
    for (var i = (startingSection-1); count <= limiter; i++) {
        durationAsString = durations[i].innerHTML;
        // This logs all of the durations to help you make sure you picked the correct start and end points
        console.log(durationAsString);
        console.log(i);
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
    }
    console.log(`The selected lectures are ${count/60} minutes long and should stop at lecture ${i}.`);
}
