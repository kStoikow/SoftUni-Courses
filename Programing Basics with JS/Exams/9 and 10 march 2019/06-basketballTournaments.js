function statistic(input) {
    let command = input.shift();
    let wins = 0;
    let loses = 0;
    let totalGames = 0;

    while (command !== 'End of tournaments') {
        let tournamentGamesCounter = 0;
        let games = Number(input.shift());

        for (let i = 0; i < games; i++) {
            let ourPoints = Number(input.shift());
            let enemyPoints = Number(input.shift());
            tournamentGamesCounter++;
            totalGames++;

            if (ourPoints > enemyPoints) {
                wins++;
                console.log(`Game ${tournamentGamesCounter} of tournament ${command}: win with ${ourPoints - enemyPoints} points.`);

            } else {
                loses++;
                console.log(`Game ${tournamentGamesCounter} of tournament ${command}: lost with ${enemyPoints - ourPoints} points.`);
            }
        }

        command = input.shift();
    }

    let winsPercentage = (wins / totalGames) * 100;
    let losePercentage = (loses / totalGames) * 100;
    console.log(`${winsPercentage.toFixed(2)}% matches win`);
    console.log(`${losePercentage.toFixed(2)}% matches lost`);
}