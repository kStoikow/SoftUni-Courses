function solveNums(input) {
    let firstPairMin = Number(input.shift());
    let secondPairMin = Number(input.shift());
    let firstPairMaxAdd = Number(input.shift());
    let secondPairMaxAdd = Number(input.shift());
    let a = firstPairMin + firstPairMaxAdd;
    let b = secondPairMin + secondPairMaxAdd;
    let combinationsToPrint = "";

    for (let i = firstPairMin; i <= a; i++) {
        let firstPairToPrint = "";
        let counterA = 0;
        let isPrimeA = false;

        for (let p = 1; p <= i; p++) {
            if (i % p === 0) {
                counterA++;
            }
        }

        if (counterA === 2) {
            isPrimeA = true;
            firstPairToPrint = i;
        }

        for (let j = secondPairMin; j <= b; j++) {
            let secondPairToPrint = "";
            let counterB = 0;
            let isPrimeB = false;

            for (let l = 1; l <= j; l++) {
                if (j % l == 0) {
                    counterB++;
                }
            }

            if (counterB === 2) {
                isPrimeB = true;
                secondPairToPrint = j;
            }

            if (isPrimeA && isPrimeB) {
                combinationsToPrint = `${firstPairToPrint}${secondPairToPrint} `;
                console.log(combinationsToPrint);
            }
        }

        isPrimeB = false;
        isPrimeA = false;
    }
}