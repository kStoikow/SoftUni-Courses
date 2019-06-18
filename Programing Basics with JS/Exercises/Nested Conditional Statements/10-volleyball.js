function games(input) {
    let isLeap = input.shift();
    let holidays = Number(input.shift());
    let homeGames = Number(input.shift());
    let sofiaGames = (48 - homeGames) * (3 / 4);
    let holidayGames = holidays * (2 / 3);
    let wholeGames = sofiaGames + holidayGames + homeGames;

    if (isLeap === "leap") {
        wholeGames *= 1.15;
    }

    console.log(Math.floor(wholeGames));
}