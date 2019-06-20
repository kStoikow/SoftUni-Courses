function equalPairs(input) {
    let pairsCount = Number(input.shift());
    let maxDifference = 0;
    let lastPair = 0;

    for (let i = 0; i < pairsCount; i++) {
        let numOne = Number(input.shift());
        let numTwo = Number(input.shift());
        let currentPair = numOne + numTwo;

        if (i > 0) {
            let diff = Math.abs(currentPair - lastPair);
            if (diff > maxDifference) {
                maxDifference = diff;
            }
        }
        
        lastPair = currentPair;
    }

    if (maxDifference === 0) {
        console.log(`Yes, value=${lastPair}`);
    } else {
        console.log(`No, maxdiff=${maxDifference}`);
    }
}