function solve(input) {
    let firstPlayer = input.shift();
    let secondPlayer = input.shift();
    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;
    let command = input.shift();

    while (command !== "End of game") {
        let firstPlayerCard = Number(command);
        let secondPlayerCard = Number(input.shift());

        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerPoints += (firstPlayerCard - secondPlayerCard);

        } else if (firstPlayerCard < secondPlayerCard) {
            secondPlayerPoints += (secondPlayerCard - firstPlayerCard);

        } else {
            console.log(`Number wars!`);
            firstPlayerCard = Number(input.shift());
            secondPlayerCard = Number(input.shift());

            if (firstPlayerCard > secondPlayerCard) {
                console.log(`${firstPlayer} is winner with ${firstPlayerPoints} points`);
                break;

            } else {
                console.log(`${secondPlayer} is winner with ${secondPlayerPoints} points`);
                break;
            }
        }

        command = input.shift();
    }

    if (command === "End of game") {
        console.log(`${firstPlayer} has ${firstPlayerPoints} points`);
        console.log(`${secondPlayer} has ${secondPlayerPoints} points`);
    }
}