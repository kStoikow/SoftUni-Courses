function arrivingAt(input) {
    let examHour = Number(input.shift());
    let examMins = Number(input.shift());
    let arrivingHour = Number(input.shift());
    let arrivingMins = Number(input.shift());
    let examTimeInMins = examHour * 60 + examMins;
    let arrivingTimeInMins = arrivingHour * 60 + arrivingMins;
    let differenceHour = 0;
    let differenceMin = 0;

    if ((examTimeInMins - arrivingTimeInMins) <= 30 && (examTimeInMins - arrivingTimeInMins >= 0)) {
        console.log("On time");

        if (examTimeInMins > arrivingTimeInMins && examTimeInMins - arrivingTimeInMins < 60) {
            console.log(`${examTimeInMins - arrivingTimeInMins} minutes before the start`);
        }

    } else if ((examTimeInMins - arrivingTimeInMins) > 30) {
        console.log("Early");

        if (examTimeInMins > arrivingTimeInMins && examTimeInMins - arrivingTimeInMins < 60) {
            console.log(`${examTimeInMins - arrivingTimeInMins} minutes before the start`);
        } else {
            differenceHour = Math.trunc((examTimeInMins - arrivingTimeInMins) / 60);
            differenceMin = (examTimeInMins - arrivingTimeInMins) % 60;

            if (differenceMin < 10) {
                console.log(`${differenceHour}:0${differenceMin} hours before the start`);
            } else {
                console.log(`${differenceHour}:${differenceMin} hours before the start`);
            }
        }

    } else if (arrivingTimeInMins > examTimeInMins) {
        console.log("Late");

        if (arrivingTimeInMins - examTimeInMins < 60) {
            console.log(`${arrivingTimeInMins - examTimeInMins} minutes after the start`);
        } else {
            differenceHour = Math.trunc((arrivingTimeInMins - examTimeInMins) / 60);
            differenceMin = (arrivingTimeInMins - examTimeInMins) % 60;

            if (differenceMin < 10) {
                console.log(`${differenceHour}:0${differenceMin} hours after the start`);
            } else {
                console.log(`${differenceHour}:${differenceMin} hours after the start`);
            }
        }
    }
}