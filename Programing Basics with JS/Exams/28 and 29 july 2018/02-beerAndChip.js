function enoughOrNot(input) {
    let name = input.shift();
    let budget = Number(input.shift());
    let beersQuantity = Number(input.shift());
    let chipsQuantity = Number(input.shift());
    let totalBeerPrice = beersQuantity * 1.2;
    let chipPrice = totalBeerPrice * 0.45;
    let totalChipPrice = Math.ceil(chipPrice * chipsQuantity);
    let totalSum = totalBeerPrice + totalChipPrice;

    if (budget >= totalSum) {
        console.log(`${name} bought a snack and has ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`${name} needs ${(totalSum - budget).toFixed(2)} more leva!`);
    }
}
