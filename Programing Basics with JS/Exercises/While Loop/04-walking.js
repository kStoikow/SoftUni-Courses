function stepGoal(input) {
    let stepsForToday = 0;

    while (stepsForToday < 10000) {
        let command = input.shift();

        if (command === 'Going home') {
            let stepsToHome = Number(input.shift());
            stepsForToday += stepsToHome;

            if (stepsForToday >= 10000) {
                console.log(`Goal reached! Good job!`);
            } else {
                console.log(`${10000 - stepsForToday} more steps to reach goal.`);
            }
            break;

        } else {
            stepsForToday += Number(command);

            if (stepsForToday >= 10000) {
                console.log(`Goal reached! Good job!`);
            }
        }
    }
}