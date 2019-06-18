function findNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let toPrint = "";

    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNumber = i + "";
        let evenSum = 0;
        let oddSum = 0;

        for (let j = 0; j < currentNumber.length; j++) {
            let currentDigit = currentNumber.charCodeAt(j);

            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (evenSum === oddSum) {
            toPrint += currentNumber + " ";
        }
    }
    console.log(toPrint);
}