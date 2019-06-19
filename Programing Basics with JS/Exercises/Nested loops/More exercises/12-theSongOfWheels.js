function secretNumber(numKey) {
    let allCombinations = "";
    let counter = 0;
    let password = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {

                    if (((a * b + c * d) === Number(numKey)) && (a < b) && (c > d)) {
                        counter++;
                        allCombinations += `${a}${b}${c}${d} `;

                        if (counter === 4) {
                            password = `${a}${b}${c}${d} `;
                        }
                    }
                }
            }
        }
    }
    console.log(allCombinations);

    if (counter >= 4) {
        console.log(`Password: ${password}`);
    } else {
        console.log("No!");
    }
}