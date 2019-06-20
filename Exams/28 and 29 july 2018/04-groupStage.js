function isClassified(input) {
    let team = input.shift();
    let gamesPlayed = Number(input.shift());
    let score = 0;
    let scoredGoals = 0;
    let takenGoals = 0;

    for (let i = 1; i <= gamesPlayed; i++) {
        let currentScoredGoals = Number(input.shift());
        let currentTakenGoals = Number(input.shift());
        scoredGoals += currentScoredGoals;
        takenGoals += currentTakenGoals;

        if (currentScoredGoals > currentTakenGoals) {
            score += 3;
        } else if (currentScoredGoals === currentTakenGoals) {
            score += 1;
        }
    }

    if (scoredGoals >= takenGoals) {
        console.log(`${team} has finished the group phase with ${score} points.`);
        console.log(`Goal difference: ${scoredGoals - takenGoals}.`);

    } else {
        console.log(`${team} has been eliminated from the group phase.`);
        console.log(`Goal difference: ${scoredGoals - takenGoals}.`);
    }
}