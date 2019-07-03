function solve(input) {
    let spaceshipWidth = Number(input.shift());
    let spaceshipLength = Number(input.shift());
    let spaceshipHeight = Number(input.shift());
    let averageAstronautHeight = Number(input.shift());
    let spaceshipVolume = spaceshipHeight * spaceshipWidth * spaceshipLength;
    let roomVolume = 2 * 2 * (averageAstronautHeight + 0.4);
    let allRooms = Math.trunc(spaceshipVolume / roomVolume);

    if (allRooms < 3) {
        console.log(`The spacecraft is too small.`);
    } else if (allRooms >= 3 && allRooms <= 10) {
        console.log(`The spacecraft holds ${allRooms} astronauts.`);
    } else {
        console.log(`The spacecraft is too big.`);
    }
}