function pointsWin(input) {
    let tournaments = Number(input.shift());
    let startingScore = Number(input.shift());
    let finalPoints = (startingScore);
    let averagePoints = 0;
    let wins = 0;

    for (let i = 1; i <= tournaments; i++) {
        let result = input.shift();

        if (result === "W") {
            finalPoints += 2000;
            averagePoints += 2000;
            wins++;

        } else if (result == "F") {
            finalPoints += 1200;
            averagePoints += 1200;

        } else {
            finalPoints += 720;
            averagePoints += 720;
        }
    }

    averagePoints /= tournaments;
    let winsPercentage = (wins / tournaments) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.trunc(averagePoints)}`);
    console.log(`${winsPercentage.toFixed(2)}%`);
}