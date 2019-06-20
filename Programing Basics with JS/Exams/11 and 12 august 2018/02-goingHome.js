function goHome(input) {
    let distanceKm = Number(input.shift());
    let gasolinePer100km = Number(input.shift());
    let gasolinePrice = Number(input.shift());
    let budget = Number(input.shift());
    let totalGasCost = (distanceKm * gasolinePer100km) / 100;
    let moneyPaid = totalGasCost * gasolinePrice;

    if (budget >= moneyPaid) {
        console.log(`You can go home. ${(budget - moneyPaid).toFixed(2)} money left.`);
    } else {
        console.log(`Sorry, you cannot go home. Each will receive ${(budget / 5).toFixed(2)} money.`);
    }
}