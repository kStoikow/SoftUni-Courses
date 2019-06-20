function metricConverter(input) {
    let distance = Number(input.shift());
    let from = input.shift();
    let to = input.shift();

    if (from == "mm") {
        distance /= 1000;
    } else if (from == "cm") {
        distance /= 100;
    }
    if (to == "mm") {
        distance *= 1000;
    } else if (to == "cm") {
        distance *= 100;
    }
    console.log(distance.toFixed(3));
}