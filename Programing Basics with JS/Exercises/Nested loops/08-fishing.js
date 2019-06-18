function fishingMoney(input) {
    let fishQuota = Number(input.shift());
    let command = input.shift();

    let cost = 0;
    let profit = 0;
    let fishCount = 0;

    while (command !== "Stop" && fishCount < fishQuota) {
        fishCount++;
        let currentValue = 0;
        let currentPrice = 0;

        for (let i = 0; i < command.length; i++) {
            currentValue += command.charCodeAt(i);
        }

        let fishWeight = Number(input.shift());
        currentPrice = currentValue / fishWeight;

        if (fishCount % 3 === 0) {
            profit += currentPrice;
        } else {
            cost += currentPrice;
        }

        command = input.shift();
    }

    if (fishCount === fishQuota) {
        console.log(`Lyubo fulfilled the quota!`);
    }

    let moneyWon = profit - cost;
    let moneyLost = cost - profit;
    
    if (profit >= cost) {
        console.log(`Lyubo's profit from ${fishCount} fishes is ${moneyWon.toFixed(2)} leva.`);
    } else {
        console.log(`Lyubo lost ${moneyLost.toFixed(2)} leva today.`);
    }
}