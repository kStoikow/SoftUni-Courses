function climbUp(input) {
    let dayCounter = 1;
    let startingHigh = 5364;
    let command = input.shift();

    while (dayCounter <= 5 && command !== "END") {
        let isResting = (command);
        let climbingMeters = Number(input.shift());

        if (isResting === "Yes") {
            dayCounter++;
        }

        if (dayCounter > 5) {
            console.log(`Failed!`);
            console.log(`${startingHigh}`);
            break;
        }

        startingHigh += climbingMeters;
        if (startingHigh >= 8848) {
            console.log(`Goal reached for ${dayCounter} days!`);
            break;
        }

        command = input.shift();
    }

    if (command === "END") {
        console.log(`Failed!`);
        console.log(`${startingHigh}`);
    }
}