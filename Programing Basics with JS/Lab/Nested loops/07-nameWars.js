function warOfNames(input) {
    let name = input.shift();
    let winnerName = "";
    let winnerScore = 0;

    while (name !== "STOP") {
        let currentScore = 0;

        for (let i = 0; i < name.length; i++) {
            currentScore += name.charCodeAt(i);
            if (currentScore >= winnerScore) {
                winnerScore = currentScore;
                winnerName = name;
            }
        }

        name = input.shift();
    }
    console.log(`Winner is ${winnerName} - ${winnerScore}!`);
}