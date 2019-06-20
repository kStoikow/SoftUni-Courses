function moneyPrize(input) {
    let projectParts = Number(input.shift());
    let moneyPerPoint = Number(input.shift());
    let totalPrize = 0;

    for (let i = 1; i <= projectParts; i++) {
        let points = Number(input.shift());
        if (i % 2 == 0) {
            points *= 2;
        }

        let currentMoney = points * moneyPerPoint;
        totalPrize += currentMoney;
    }

    console.log(`The project prize was ${totalPrize.toFixed(2)} lv.`);
}