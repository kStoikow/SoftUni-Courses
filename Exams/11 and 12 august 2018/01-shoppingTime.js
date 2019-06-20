function efforts(input) {
    let restTime = Number(input.shift());
    let partPrice = Number(input.shift());
    let programPrice = Number(input.shift());
    let coffeePrice = Number(input.shift());
    let moneySpend = (partPrice * 3) + (programPrice * 2) + coffeePrice;
    let partBuyTime = 3 * 2;
    let programBuyTime = 2 * 2;
    let relaxTime = (restTime - 5) - (partBuyTime + programBuyTime);
    console.log(moneySpend.toFixed(2));
    console.log(relaxTime);
}