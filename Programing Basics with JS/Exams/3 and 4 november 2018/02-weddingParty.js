function moneyPlan(input) {
    let guestsCount = Number(input[0]);
    let budget = Number(input[1]);
    let price = guestsCount * 20;

    if (budget >= price) {
        let budgetLeft = budget - price;
        let donate = budgetLeft - (budgetLeft * 0.4);
        console.log(`Yes! ${Math.round(budgetLeft * 0.4)} lv are for fireworks and ${Math.round(donate)} lv are for donation.`);

    } else {
        console.log(`They won't have enough money to pay the covert. They will need ${Math.round(price - budget)} lv more.`);
    }
}