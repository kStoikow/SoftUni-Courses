function matrixSolve(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);
    let fourthNum = Number(input[3]);

    for (let firstElement = firstNum; firstElement <= secondNum; firstElement++) {
        for (let secondElement = firstNum; secondElement <= secondNum; secondElement++) {
            for (let thirdElement = thirdNum; thirdElement <= fourthNum; thirdElement++) {
                for (let fourthElement = thirdNum; fourthElement <= fourthNum; fourthElement++) {
                    if ((firstElement != secondElement && thirdElement != fourthElement) && (firstElement + fourthElement === secondElement + thirdElement)) {
                        console.log(`${firstElement}${secondElement}`);
                        console.log(`${thirdElement}${fourthElement}`);
                        console.log();
                    }
                }
            }
        }
    }
}