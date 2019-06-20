function dogFood(input) {
    let daysMissing = Number(input.shift());
    let foodKg = Number(input.shift());
    let firstDogFood = Number(input.shift());
    let secondDogFood = Number(input.shift());
    let thirdDogFood = Number(input.shift());
    let dogsFoodNeeded = (firstDogFood + secondDogFood + thirdDogFood) * daysMissing;

    if (dogsFoodNeeded <= foodKg) {
        console.log(`${Math.floor(foodKg - dogsFoodNeeded)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(dogsFoodNeeded - foodKg)} more kilos of food are needed.`);
    }
}