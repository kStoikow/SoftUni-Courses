function petShop(input) {
    let dogsCount = Number(input.shift());
    let otherAnimals = Number(input.shift());
    let totalSum = dogsCount * 2.5 + otherAnimals * 4;
    console.log(`${totalSum.toFixed(2)} lv.`);
}