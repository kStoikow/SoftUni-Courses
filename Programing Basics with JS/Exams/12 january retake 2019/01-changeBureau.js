
function valuteCalculator(input) {
    let bitcoinQuantity = Number(input.shift());
    let chineseYuanQuantity = Number(input.shift());
    let comisionPercent = Number(input.shift());
    let money = bitcoinQuantity * 1168;
    let yuanToDolar = chineseYuanQuantity * 0.15;
    let yuanToLeva = yuanToDolar * 1.76;
    let totalSum = (money + yuanToLeva) / 1.95;
    let comision = (comisionPercent / 100) * totalSum;
    let moneyLeft = totalSum - comision;
    console.log(moneyLeft.toFixed(2));
}