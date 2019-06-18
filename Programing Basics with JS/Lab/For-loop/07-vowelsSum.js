function vowelsSumPoints(input) {
    let word = input[0];
    let sumPoints = 0;

    for (let i = 0; i <= word.length; i++) {
        let letter = word[i];

        switch (letter) {
            case "a": sumPoints++;
                break;

            case "e": sumPoints += 2;
                break;

            case "i": sumPoints += 3;
                break;

            case "o": sumPoints += 4;
                break;

            case "u": sumPoints += 5;
                break;

            default:
                break;
        }
    }
    console.log(sumPoints);
}