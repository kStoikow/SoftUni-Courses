function substitute(input) {
    let firstPlayerDigit = Number(input[0]);
    let firstPlayerSecondDigit = Number(input[1]);
    let secondPlayerDigit = Number(input[2]);
    let secondPlayerSecondDigit = Number(input[3]);
    let counter = 0;
    let firstPlayer = "";
    let secondPlayer = "";

    for (let i = firstPlayerDigit; i <= 8; i++) {
        for (let j = 9; j >= firstPlayerSecondDigit; j--) {
            for (let l = secondPlayerDigit; l <= 8; l++) {
                for (let p = 9; p >= secondPlayerSecondDigit; p--) {
                    if ((i % 2 === 0 && j % 2 !== 0) && (l % 2 === 0 && p % 2 !== 0)) {
                        firstPlayer = i + "" + j;
                        secondPlayer = l + "" + p;

                        if (counter === 6) {
                            break;
                        }

                        if (firstPlayer !== secondPlayer) {
                            console.log(`${firstPlayer} - ${secondPlayer}`);
                            counter++;

                        } else {
                            console.log(`Cannot change the same player.`);
                        }
                    }
                }
            }
        }
    }
}