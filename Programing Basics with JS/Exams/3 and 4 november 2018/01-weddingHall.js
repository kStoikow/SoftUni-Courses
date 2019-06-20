function howMany(input) {
    let lengthMeters = Number(input[0]);
    let widthMeters = Number(input[1]);
    let barSideMeters = Number(input[2]);
    let dancing = (lengthMeters * widthMeters) * 0.19;
    let dancingPersonSpace = 3.2;
    let freeSpace = (lengthMeters * widthMeters) - dancing - (barSideMeters * barSideMeters);
    let howManyDancers = freeSpace / dancingPersonSpace;
    console.log(Math.ceil(howManyDancers));
}