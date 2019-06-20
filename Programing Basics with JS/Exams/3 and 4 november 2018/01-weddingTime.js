function moneyNeeded(input) {
    let whiskeyPrice = Number(input[0]);
    let waterLitres = Number(input[1]);
    let wineLitres = Number(input[2]);
    let champagneL = Number(input[3]);
    let whiskeyLitres = Number(input[4]);
    let champagnePrice = whiskeyPrice * 0.5;
    let winePrice = champagnePrice * 0.4;
    let waterPrice = champagnePrice * 0.1;
    let moneyNeeded = (champagnePrice * champagneL) + (wineLitres * winePrice) + (waterLitres * waterPrice) + (whiskeyLitres * whiskeyPrice);
    console.log(moneyNeeded.toFixed(2));
}