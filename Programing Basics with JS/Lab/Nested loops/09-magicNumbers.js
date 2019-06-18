function magicalNum(input) {
    let magicalNum = Number(input[0]);
    let toPrint = "";

    for (let numOne = 1; numOne < 10; numOne++) {
        for (let numTwo = 1; numTwo < 10; numTwo++) {
            for (let numThree = 1; numThree < 10; numThree++) {
                for (let numFour = 1; numFour < 10; numFour++) {
                    for (let numFive = 1; numFive < 10; numFive++) {
                        for (let numSix = 1; numSix < 10; numSix++) {
                            if (numOne * numTwo * numThree * numFour * numFive * numSix === magicalNum) {
                                toPrint += `${numOne}${numTwo}${numThree}${numFour}${numFive}${numSix} `;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(toPrint);
}