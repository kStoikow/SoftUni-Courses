function sumSecs(input) {
    let timeFirst = Number(input.shift());
    let timeSecond = Number(input.shift());
    let timeThird = Number(input.shift());

    let totalTime = timeFirst + timeSecond + timeThird;
    let mins = Math.floor(totalTime / 60);
    let secs = totalTime % 60;
    if (secs < 10) {
        console.log(`${mins}:0${secs}`);
    } else {
        console.log(`${mins}:${secs}`);
    }
}