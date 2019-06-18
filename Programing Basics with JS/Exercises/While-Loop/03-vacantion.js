function canYouSave(input) {
    let vacantionPrice = Number(input.shift());
    let budget = Number(input.shift());

    let spendCounter = 0;
    let dayCounter = 0;

    while (budget < vacantionPrice && spendCounter < 5) {
        let command = input.shift();

        if (command === "save") {
            let money = Number(input.shift());
            budget += money;
            spendCounter = 0;

        } else {
            let money = Number(input.shift());
            budget -= money;
            spendCounter++;

            if (budget < 0) {
                budget = 0;
            }
        }

        dayCounter++;

        if (spendCounter === 5) {
            console.log(`You can't save the money.`);
            console.log(dayCounter);
            break;
        }

        if (budget >= vacantionPrice) {
            console.log(`You saved the money for ${dayCounter} days.`);
            break;
        }
    }
}