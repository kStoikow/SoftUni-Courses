function toyShop(input) {
    let tripPrice = Number(input.shift());
    let puzzles = Number(input.shift());
    let dolls = Number(input.shift());
    let bears = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());
    let toysPrice = (puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2);
    let toysNum = puzzles + dolls + bears + minions + trucks;

    if (toysNum >= 50) {
        toysPrice *= 0.75;
    }

    toysPrice *= 0.9;
    if (toysPrice >= tripPrice) {
        let moneyLeft = toysPrice - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = Math.abs(tripPrice - toysPrice);
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}
