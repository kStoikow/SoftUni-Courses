function timePlusFifteen(input) {
    let startHour = Number(input.shift());
    let startMin = Number(input.shift());
    let timeInMins = startHour * 60 + startMin;
    let timeAfter = timeInMins + 15;
    let afterMin = timeAfter % 60;
    let hourAfter = Math.floor(timeAfter / 60);

    if (afterMin > 59) {
        afterMin -= 60;
    }

    if (hourAfter > 23) {
        hourAfter -= 24;
    }
    if (afterMin < 10) {
        console.log(`${Math.floor(hourAfter)}:0${afterMin}`);
    } else {
        console.log(`${Math.floor(hourAfter)}:${afterMin}`);
    }

}