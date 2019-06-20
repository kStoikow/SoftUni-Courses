function bills(input) {
    let months = Number(input.shift());
    let monthsCounter = 0;
    let electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;
    let average = 0;

    while (monthsCounter < months) {
        let currentElectricityBill = Number(input.shift());
        electricity += currentElectricityBill;
        water += 20;
        internet += 15;
        other += (currentElectricityBill + 20 + 15) * 1.2;
        monthsCounter++;
    }

    average = (electricity + water + internet + other) / months;
    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}