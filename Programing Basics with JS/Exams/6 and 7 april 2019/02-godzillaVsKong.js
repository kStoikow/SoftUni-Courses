function isFilming(input) {
    let budget = Number(input.shift());
    supernumeraryCount = Number(input.shift());
    supernumeraryCostumePrice = Number(input.shift());

    let decor = budget * 0.1;
    let costumesPrice = supernumeraryCount * supernumeraryCostumePrice;

    if (supernumeraryCount > 150) {
        costumesPrice *= 0.9;
    }

    let moneyNeeded = decor + costumesPrice;

    if (budget >= moneyNeeded) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - moneyNeeded).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(moneyNeeded - budget).toFixed(2)} leva more.`);
    }
}