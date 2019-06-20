function isWon(input) {
    let tshirtPrice = Number(input[0]);
    let ballPrice = Number(input[1]);
    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let buttonsPrice = (tshirtPrice + shortsPrice) * 2;
    let totalSum = (tshirtPrice + shortsPrice + socksPrice + buttonsPrice) * 0.85;

    if (totalSum >= ballPrice) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalSum.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(ballPrice - totalSum).toFixed(2)} lv. more.`);
    }
}
