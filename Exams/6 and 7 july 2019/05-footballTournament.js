function teamAnalysis(input) {
    let team = input.shift();
    let gamesCount = Number(input.shift());
    let totalPoints = 0;
    let gamesWon = 0;
    let gamesDraw = 0;
    let gamesLose = 0;
    let totalGames = 0;

    for (let i = 0; i < gamesCount; i++) {
        let isWin = input.shift();
        if (isWin === 'W') {
            totalPoints += 3;
            gamesWon++;
            totalGames++;

        } else if (isWin === 'D') {
            totalPoints++;
            gamesDraw++;
            totalGames++

        } else {
            gamesLose++;
            totalGames++;
        }
    }

    let winRate = (gamesWon / totalGames) * 100;

    if (gamesCount === 0) {
        console.log(`${team} hasn't played any games during this season.`);
    } else {
        console.log(`${team} has won ${totalPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${gamesWon}`);
        console.log(`## D: ${gamesDraw}`);
        console.log(`## L: ${gamesLose}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
    }
}