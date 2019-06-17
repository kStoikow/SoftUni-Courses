function dancehall(input) {
    let hallLenght = Number(input.shift());
    let hallWidth = Number(input.shift());
    let wardrobeSide = Number(input.shift());

    let hallArea = (hallLenght * 100) * (hallWidth * 100);
    let bench = hallArea / 10;

    let wardrobeArea = (wardrobeSide * 100) * (wardrobeSide * 100);
    let freeHallArea = hallArea - bench - wardrobeArea;
    let freeDancers = Math.floor(freeHallArea / (40 + 7000));

    console.log(Math.floor(freeDancers));
}