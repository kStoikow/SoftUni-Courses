function combination(input) {
    let combination = Number(input[0]);
    let counter = 0;

    for (let symbolOne = "B".charCodeAt(0); symbolOne <= "L".charCodeAt(0); symbolOne++) {

        if (symbolOne % 2 === 0) {
            for (let symbolTwo = "f".charCodeAt(0); symbolTwo >= "a".charCodeAt(0); symbolTwo--) {
                for (let symbolThree = "A".charCodeAt(0); symbolThree <= "C".charCodeAt(0); symbolThree++) {
                    for (let symbolFour = 1; symbolFour <= 10; symbolFour++) {
                        for (let symbolFive = 10; symbolFive >= 1; symbolFive--) {
                            counter++;

                            if (counter === combination) {
                                let firstLetter = String.fromCharCode(symbolOne);
                                let secondLetter = String.fromCharCode(symbolTwo);
                                let thirdLetter = String.fromCharCode(symbolThree);
                                console.log(`Ticket combination: ${firstLetter}${secondLetter}${thirdLetter}${symbolFour}${symbolFive}`);
                                console.log(`Prize: ${symbolOne + symbolTwo + symbolThree + symbolFour + symbolFive} lv.`);
                            }
                        }
                    }
                }
            }
        }
    }
}