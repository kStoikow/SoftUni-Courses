function computerBuild(input) {
    let budget = Number(input.shift());
    let videoCardsCount = Number(input.shift());
    let processorsCount = Number(input.shift());
    let ramCount = Number(input.shift());
    let videoCardsPrice = videoCardsCount * 250;
    let processorPrice = videoCardsPrice * 0.35;
    let ramPrice = videoCardsPrice * 0.1;
    let totalSum = videoCardsPrice + (processorPrice * processorsCount) + (ramPrice * ramCount);
    if (videoCardsCount > processorsCount) {
        totalSum = totalSum * 0.85;
    }

    if (budget >= totalSum) {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    }
}