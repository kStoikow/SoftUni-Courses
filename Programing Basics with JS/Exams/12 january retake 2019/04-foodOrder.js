function order(input) {
    let budget = Number(input.shift());
    let command = input.shift();
    let counter = 0;
    let moneyLeft = (budget) - 2.5;

    while (command !== "Order") {
        let price = Number(input.shift());

        if (moneyLeft < price) {
            console.log(`You will exceed the budget if you order this!`);
            command = input.shift();
            continue;

        } else {
            moneyLeft -= price;
            counter++;
        }

        command = input.shift();
    }

    console.log(`You ordered ${counter} items!`);
    console.log(`Total: ${(budget - moneyLeft).toFixed(2)}`);
}