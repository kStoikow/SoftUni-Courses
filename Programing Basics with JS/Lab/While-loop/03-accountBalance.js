function accBalance(input) {
    let transaction = Number(input.shift());
    let value = Number(input.shift());
    let firstTransaction = 0;
    let money = 0;

    while (firstTransaction <= transaction && value > 0) {
        console.log(`Increase: ${value.toFixed(2)}`);
        money += value;
        value = Number(input.shift());
    }

    if (value < 0) {
        console.log(`Invalid operation!`);
    }

console.log(`Total: ${money.toFixed(2)}`);
}