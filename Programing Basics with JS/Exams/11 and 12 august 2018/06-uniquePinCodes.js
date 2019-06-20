function pinCodes(input) {
    let firstNumLimit = Number(input.shift());
    let secondNumLimit = Number(input.shift());
    let thirdNumLimit = Number(input.shift());
    let firstValid = false;
    let secondValid = false;
    let thirdValid = false;

    for (let i = 1; i <= firstNumLimit; i++) {
        for (let j = 1; j <= secondNumLimit; j++) {
            for (let k = 1; k <= thirdNumLimit; k++) {
                let toPrint = "";

                if (i % 2 === 0) {
                    firstValid = true;
                }

                if (j === 2 || j === 3 || j === 5 || j === 7) {
                    secondValid = true;
                }

                if (k % 2 === 0) {
                    thirdValid = true;
                }

                if (firstValid === true && secondValid === true && thirdValid === true) {
                    toPrint += i + " " + j + " " + k;
                    console.log(toPrint);
                }

                firstValid = false;
                secondValid = false;
                thirdValid = false;
            }
        }
    }
}