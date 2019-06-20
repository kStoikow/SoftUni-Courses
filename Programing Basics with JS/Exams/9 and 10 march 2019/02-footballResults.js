function results(input) {
    let firstMatch = input.shift();
    let secondMatch = input.shift();
    let thirdMatch = input.shift();
    let wins = 0;
    let draws = 0;
    let loses = 0;

    if (firstMatch[0] > firstMatch[2]) {
        wins++;
    } else if (firstMatch[0] == firstMatch[2]) {
        draws++;
    } else {
        loses++;
    }

    if (secondMatch[0] > secondMatch[2]) {
        wins++;
    } else if (secondMatch[0] === secondMatch[2]) {
        draws++;
    } else {
        loses++;
    }

    if (thirdMatch[0] > thirdMatch[2]) {
        wins++;
    } else if (thirdMatch[0] === thirdMatch[2]) {
        draws++;
    } else {
        loses++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${loses} games.`);
    console.log(`Drawn games: ${draws}`);
}