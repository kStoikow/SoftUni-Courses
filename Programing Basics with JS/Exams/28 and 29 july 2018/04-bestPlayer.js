function bestPlayer(input) {
    let player = input.shift();
    let bestPlayer = "";
    let bestGoals = 0;

    while (player !== "END") {
        let hisGoals = Number(input.shift());

        if (hisGoals > bestGoals) {
            bestGoals = hisGoals;
            bestPlayer = player;
        }

        if (bestGoals >= 10) {
            break;
        }

        player = input.shift();
    }

    console.log(`${bestPlayer} is the best player!`);

    if (bestGoals >= 3) {
        console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestGoals} goals.`);
    }
}