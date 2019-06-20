function isEnough(input) {
    let moneyNeeded = Number(input[0]);
    let loveLetters = Number(input[1]);
    let waxRoses = Number(input[2]);
    let keyHolders = Number(input[3]);
    let caricatures = Number(input[4]);
    let surprises = Number(input[5]);
    let loveLettersPrice = loveLetters * 0.6;
    let waxRosesPrice = waxRoses * 7.2;
    let keyHoldersPrice = keyHolders * 3.6;
    let caricaturesPrice = caricatures * 18.2;
    let surprisesPrice = surprises * 22;
    let salesCount = loveLetters + waxRoses + keyHolders + caricatures + surprises;
    let totalPrice = loveLettersPrice + waxRosesPrice + keyHoldersPrice + caricaturesPrice + surprisesPrice;

    if (salesCount >= 25) {
        totalPrice *= 0.65;
    }

    totalPrice *= 0.9;

    if (totalPrice >= moneyNeeded) {
        console.log(`Yes! ${(totalPrice - moneyNeeded).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(moneyNeeded - totalPrice).toFixed(2)} lv needed.`);
    }
}