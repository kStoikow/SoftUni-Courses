function statistic(input) {
    let teamName = input.shift();
    let gamesPlayed = Number(input.shift());
    let totalTimePlayed = 0;
    let averageTime = 0;
    let continuesCount = 0;
    let penalties = 0;

    for (let i = 1; i <= gamesPlayed; i++) {
        let timeLength = Number(input.shift());
        totalTimePlayed += timeLength;

        if (timeLength > 120) {
            penalties++;
        } else if (timeLength > 90) {
            continuesCount++;
        }
    }

    averageTime = totalTimePlayed / gamesPlayed;
    console.log(`${teamName} has played ${totalTimePlayed} minutes. Average minutes per game: ${averageTime.toFixed(2)}`);
    console.log(`Games with penalties: ${penalties}`);
    console.log(`Games with additional time: ${continuesCount}`);
}