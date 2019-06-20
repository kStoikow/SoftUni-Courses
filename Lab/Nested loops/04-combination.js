function combinations(input) {
    let number = Number(input[0]);
    let possibleCombinations = 0;

    for (let firstNum = 0; firstNum <= number; firstNum++) {
        for (let secondNum = 0; secondNum <= number; secondNum++) {
            for (let thirdNum = 0; thirdNum <= number; thirdNum++) {
                for (let fourthNum = 0; fourthNum <= number; fourthNum++) {
                    for (let fifthNum = 0; fifthNum <= number; fifthNum++) {
                        if (firstNum + secondNum + thirdNum + fourthNum + fifthNum === number) {
                            possibleCombinations++;
                        }
                    }
                }
            }
        }
    }
    console.log(possibleCombinations);
}