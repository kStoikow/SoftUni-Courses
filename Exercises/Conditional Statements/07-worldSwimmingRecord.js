function swimmingRecord(input) {
    let worldRec = Number(input.shift());
    let distance = Number(input.shift());
    let secsForMeter = Number(input.shift());

    let timesSlowed = Math.floor(distance / 15);
    let ivansTime = (secsForMeter * distance) + (timesSlowed * 12.5);
    let difference = Math.abs(worldRec - ivansTime);
    let result = ivansTime.toFixed(2);

    if (ivansTime < worldRec) {
        console.log(`Yes, he succeeded! The new world record is ${result} seconds.`);
    } else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }

}