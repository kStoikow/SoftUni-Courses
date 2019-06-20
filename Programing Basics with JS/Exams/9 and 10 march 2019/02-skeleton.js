function isWin(input) {
    let minutes = Number(input.shift());
    let seconds = Number(input.shift());
    let lengthMeters = Number(input.shift());
    let secondsFor100m = Number(input.shift());

    let recordTime = (minutes * 60) + seconds;
    let timesSlowed = lengthMeters / 120;
    let hisTime = ((lengthMeters / 100) * secondsFor100m) - (timesSlowed * 2.5);

    if (hisTime <= recordTime) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${hisTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(hisTime - recordTime).toFixed(3)} second slower.`);
    }
}