function statistic(input) {
    let minutes = Number(input.shift());
    let playerName = input.shift();

    if (minutes === 0) {
        console.log(`Match has just began!`);
    } else if (minutes < 45) {
        console.log(`First half time.`);
    } else {
        console.log(`Second half time.`);
    }

    if (minutes > 0 && minutes <= 10) {
        console.log(`${playerName} missed a penalty.`);
        if (minutes % 2 === 0) {
            console.log(`${playerName} was injured after the penalty.`);
        }

    } else if (minutes > 10 && minutes <= 35) {
        console.log(`${playerName} received yellow card.`);
        if (minutes % 2 !== 0) {
            console.log(`${playerName} got another yellow card.`);
        }

    } else if (minutes > 35 && minutes < 45) {
        console.log(`${playerName} SCORED A GOAL !!!`);

    } else if (minutes > 45 && minutes <= 55) {
        console.log(`${playerName} got a freekick.`);
        if (minutes % 2 === 0) {
            console.log(`${playerName} missed the freekick.`);
        }

    } else if (minutes > 55 && minutes <= 80) {
        console.log(`${playerName} missed a shot from corner.`);
        if (minutes % 2 !== 0) {
            console.log(`${playerName} has been changed with another player.`);
        }

    } else if (minutes > 80 && minutes <= 90) {
        console.log(`${playerName} SCORED A GOAL FROM PENALTY !!!`);
    }
}
