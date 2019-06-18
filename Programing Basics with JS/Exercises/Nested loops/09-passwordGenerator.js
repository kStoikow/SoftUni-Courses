function generate(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let firstLetter = "a".charCodeAt(0);
    let secondLetter = "a".charCodeAt(0);
    let printPassword = "";

    for (let i = 1; i < firstNumber; i++) {
        for (let j = 1; j < firstNumber; j++) {
            for (let k = firstLetter; k < firstLetter + secondNumber; k++) {
                let x = String.fromCharCode(k);

                for (let l = secondLetter; l < secondLetter + secondNumber; l++) {
                    let y = String.fromCharCode(l);

                    for (let t = 1; t <= firstNumber; t++) {
                        if (t > i && t > j) {
                            printPassword += `${i}${j}${x}${y}${t} `;
                        }
                    }
                }
            }
        }
    }
    console.log(printPassword);
}