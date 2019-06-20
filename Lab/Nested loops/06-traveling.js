function savingMoney(input) {
    let destination = input.shift();

    while (destination !== "End") {
        let neededMoney = Number(input.shift());
        let moneySaved = 0;

        while (moneySaved < neededMoney) {
            let nextNum = Number(input.shift());
            moneySaved += nextNum;
        }

        if (moneySaved >= neededMoney) {
            console.log(`Going to ${destination}!`);
        }

        destination = input.shift();
    }
}