function voucher(input) {
    let voucherMoney = Number(input.shift());
    let command = input.shift();
    let ticketsBought = 0;
    let foodBought = 0;

    while (command !== 'End' || voucherMoney > 0) {
        let toBuy = (command);
        let price = 0;

        if (command === 'End') {
            break;

        }
        if (toBuy.length > 8) {
            for (let i = 0; i < 2; i++) {
                price += toBuy.charCodeAt(i);
            }

            if (voucherMoney >= price) {
                ticketsBought++;
                voucherMoney -= price;

            } else {
                break;
            }

        } else {
            price = toBuy.charCodeAt(0);

            if (voucherMoney >= price) {
                foodBought++;
                voucherMoney -= price;

            } else {
                break;
            }
        }

        command = input.shift();
    }
    console.log(ticketsBought);
    console.log(foodBought);
}