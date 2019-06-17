function fishTank(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percent = Number(input.shift());

    let  volumeDm = (length * width * height) / 1000;
console.log((volumeDm * (1 - (percent * 0.01))).toFixed(3));
}