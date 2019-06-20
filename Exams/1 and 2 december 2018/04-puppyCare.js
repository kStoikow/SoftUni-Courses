function isEnough(input) {
    let foodKg = Number(input.shift());
    let command = input.shift();
    let foodGrams = foodKg * 1000;
    let eatenFood = 0;

    while (command !== "Adopted") {
        let gramsFood = Number(command);
        eatenFood += gramsFood;
        command = input.shift();
    }

    if (foodGrams >= eatenFood) {
        console.log(`Food is enough! Leftovers: ${foodGrams - eatenFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${eatenFood - foodGrams} grams more.`);
    }
}