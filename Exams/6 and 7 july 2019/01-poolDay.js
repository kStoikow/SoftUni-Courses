function sumAtPool(input) {
    let peopleCount = Number(input.shift());
    let taxPerPerson = Number(input.shift());
    let sunbedPrice = Number(input.shift());
    let umbrellaPrice = Number(input.shift());
    let totalSum = 0;
    let wholeTax = taxPerPerson * peopleCount;
    let umbrellaCount = Math.ceil(peopleCount / 2);
    let sunbedCount = Math.ceil(peopleCount * 0.75);
    totalSum = (sunbedCount * sunbedPrice) + (umbrellaCount * umbrellaPrice) + wholeTax;
    console.log(`${totalSum.toFixed(2)} lv.`);
}