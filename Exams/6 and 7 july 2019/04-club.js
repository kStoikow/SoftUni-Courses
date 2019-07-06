function isEnough(input) {
    let incomeGoal = Number(input.shift());
    let currentSavedMoney = 0;
    let command = input.shift();

    while (command !== 'Party!') {
        let coctail = (command);
        let quantity = Number(input.shift());
        let coctailPrice = coctail.length;
        let currentTotal = coctailPrice * quantity;
        if (currentTotal % 2 === 1) {
            currentTotal *= 0.75;
        }

        currentSavedMoney += currentTotal;

        if (currentSavedMoney >= incomeGoal) {
            console.log(`Target acquired.`);
            break;
        }

        command = input.shift();
    }

    if (command === 'Party!') {
        console.log(`We need ${(incomeGoal - currentSavedMoney).toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${currentSavedMoney.toFixed(2)} leva.`);
}