function symbolsOfNum(input) {
    let numberInString = input[0];
    let toPrint = "";

    for (let i = numberInString.length - 1; i >= 0; i--) {
        let currentDigit = Number(numberInString[i]);

        if (currentDigit === 0) {
            toPrint += "ZERO"
        }

        for (let j = 1; j <= currentDigit; j++) {
            toPrint += String.fromCharCode(currentDigit + 33);

        }

        console.log(`${toPrint} `);
        toPrint = "";
    }
}