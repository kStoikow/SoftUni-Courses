function findSpecial(input) {
    let specialNumber = Number(input[0]);
    let toPrint = "";

    for (let i = 1111; i <= 9999; i++) {
        let currentNumber = i + "";
        let counter = 0;

        for (let j = 0; j < currentNumber.length; j++) {
            let currentDigit = Number(currentNumber[j]);

            if (specialNumber % currentDigit === 0) {
                counter++;
            }
        }

        if (counter === 4) {
            toPrint += currentNumber + " ";
        }
    }

    console.log(`${toPrint}`);
}