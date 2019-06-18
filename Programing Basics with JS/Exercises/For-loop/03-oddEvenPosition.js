function numbers(input) {
    let numbersCount = Number(input[0]);
    let evenSum = 0;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let oddSum = 0;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let maxEvenCount = 0;
    let maxOddCount = 0;
    let minEvenCount = 0;
    let minOddCount = 0;

    for (let i = 1; i <= numbersCount; i++) {
        let nextNum = Number(input[i]);

        if (i % 2 === 0) {
            evenSum += nextNum;

            if (evenMax < nextNum) {
                evenMax = nextNum;
                maxEvenCount++;
            }

            if (evenMin > nextNum) {
                evenMin = nextNum;
                minEvenCount++;
            }

        } else {
            oddSum += nextNum;

            if (oddMax < nextNum) {
                oddMax = nextNum;
                maxOddCount++;
            }

            if (oddMin > nextNum) {
                oddMin = nextNum;
                minOddCount++;
            }
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (minOddCount === 0) {
        console.log(`OddMin=No,`);
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }

    if (maxOddCount === 0) {
        console.log(`OddMax=No,`);
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (minEvenCount === 0) {
        console.log(`EvenMin=No,`);
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }

    if (maxEvenCount === 0) {
        console.log(`EvenMax=No`);
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}