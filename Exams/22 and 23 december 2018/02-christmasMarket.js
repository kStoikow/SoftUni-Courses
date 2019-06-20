function isDonated(input) {
    let moneyGoal = Number(input.shift());
    let fantasyQuantity = Number(input.shift());
    let horrorQuantity = Number(input.shift());
    let romaticQuantity = Number(input.shift());
    let totalBooksPrice = ((fantasyQuantity * 14.9) + (horrorQuantity * 9.8) + (romaticQuantity * 4.3)) * 0.8;

    if (totalBooksPrice >= moneyGoal) {
        let moneyForSellers = Math.floor((totalBooksPrice - moneyGoal) * 0.1);
        let donate = totalBooksPrice - moneyForSellers;
        console.log(`${donate.toFixed(2)} leva donated.`);
        console.log(`Sellers will receive ${moneyForSellers} leva.`);
    } else {
        console.log(`${(moneyGoal - totalBooksPrice).toFixed(2)} money needed.`);
    }
}
