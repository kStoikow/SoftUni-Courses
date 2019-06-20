function record(input) {
    let recordSec = Number(input.shift());
    let distanceM = Number(input.shift());
    let secondsPerM = Number(input.shift());
    let timesSlowed = Math.floor(distanceM / 50);
    let secondsSlowed = timesSlowed * 30;
    let hisTime = (distanceM * secondsPerM) + secondsSlowed;

    if (hisTime < recordSec) {
        console.log(`Yes! The new record is ${hisTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(hisTime - recordSec).toFixed(2)} seconds slower.`);
    }
}