function canDecorate(input) {
    let budget = Number(input.shift());
    let budgetLeft = (budget);
    let command = input.shift();

    while (command !== "Stop") {
        let decorationName = (command);
        let currentSum = 0;

        for (let i = 0; i < decorationName.length; i++) {
            let currentLetter = decorationName.charCodeAt(i);
            currentSum += currentLetter;
        }

        if (budgetLeft >= currentSum) {
            console.log(`Item successfully purchased!`);
            budgetLeft -= currentSum;
            
        } else {
            console.log(`Not enough money!`);
            break;
        }

        command = input.shift();
    }

    if (command === "Stop") {
        console.log(`Money left: ${budgetLeft}`);
    }
}