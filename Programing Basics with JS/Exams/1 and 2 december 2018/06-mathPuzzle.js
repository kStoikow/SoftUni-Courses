function solvePuzzle(input) {
    let puzzleKey = Number(input.shift());
    let toPrint = "";

    for (let firstNumber = 1; firstNumber <= 30; firstNumber++) {
        for (let secondNumber = 1; secondNumber <= 30; secondNumber++) {
            for (let thirdNumber = 1; thirdNumber <= 30; thirdNumber++) {
                let currPrint = "";

                if ((firstNumber < secondNumber && secondNumber < thirdNumber) && (firstNumber + secondNumber + thirdNumber) === puzzleKey) {
                    currPrint = `${firstNumber} + ${secondNumber} + ${thirdNumber} = ${puzzleKey}`;
                    toPrint += currPrint;
                    console.log(currPrint);

                } else if ((firstNumber > secondNumber && secondNumber > thirdNumber) && (firstNumber * secondNumber * thirdNumber) === puzzleKey) {
                    currPrint = `${firstNumber} * ${secondNumber} * ${thirdNumber} = ${puzzleKey}`;
                    toPrint += currPrint;
                    console.log(currPrint);
                }
            }
        }
    }

    if (toPrint === "") {
        console.log(`No!`);
    }
}
