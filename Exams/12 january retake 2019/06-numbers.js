function modifying(input) {
    let magicNum = input.shift();
    let rows = 0;
    let numbers = 0;
    let firstDigit = -1;
    let secondDigit = -1;
    let thirdDigit = -1;

    for (let l = 0; l < magicNum.length; l++) {
        let digit = Number(magicNum[l]);

        if (firstDigit === -1) {
            firstDigit = digit;
        } else if (secondDigit === -1) {
            secondDigit = digit;
        } else if (thirdDigit === -1) {
            thirdDigit = digit;
        }

        if (l < magicNum.length - 1) {
            rows += digit;
        }

        if (l !== 1) {
            numbers += digit;
        }
    }

    let toPrint = "";
    let newNumber = Number(magicNum);

    for (let i = 1; i <= rows; i++) {

        for (let j = 1; j <= numbers; j++) {
            if (newNumber % 5 === 0) {
                newNumber -= firstDigit;
            } else if (newNumber % 3 === 0) {
                newNumber -= secondDigit;
            } else {
                newNumber += thirdDigit;
            }

            toPrint += newNumber + " ";
        }

        console.log(toPrint);
        toPrint = "";
    }
}