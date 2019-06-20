function decorate(input) {
    let budget = Number(input.shift());
    let balloonsCounter = 0;
    let flowersCounter = 0;
    let candlesCounter = 0;
    let ribbonsCounter = 0;
    let command = input.shift();
    let moneyLeft = budget;
    let totalPrice = 0;
    let price = 0;

    while (command !== "stop") {
        let decorationToBuy = (command);
        let quantity = Number(input.shift());

        switch (decorationToBuy) {
            case "balloons": price = 0.1 * quantity;
                balloonsCounter += quantity;
                break;

            case "flowers": price = 1.5 * quantity;
                flowersCounter += quantity;
                break;

            case "candles": price = 0.5 * quantity;
                candlesCounter += quantity;
                break;

            case "ribbon": price = 2 * quantity;
                ribbonsCounter += quantity;
                break;
        }

        moneyLeft -= price;
        totalPrice += price;
        command = input.shift();

        if (command === "stop") {
            console.log(`Spend money: ${totalPrice.toFixed(2)}`);
            console.log(`Money left: ${moneyLeft.toFixed(2)}`);
            console.log(`Purchased decoration is ${balloonsCounter} balloons, ${ribbonsCounter} m ribbon, ${flowersCounter} flowers and ${candlesCounter} candles.`);
        }

        if (moneyLeft <= 0) {
            console.log('All money is spent!');
            console.log(`Purchased decoration is ${balloonsCounter} balloons, ${ribbonsCounter} m ribbon, ${flowersCounter} flowers and ${candlesCounter} candles.`);
            break;
        }
    }
}