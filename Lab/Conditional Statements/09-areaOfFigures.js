function areas(input) {
    let figure = input.shift();
    let a = Number(input.shift());
    let b = Number(input.shift());

    if (figure == "square") {
        console.log((a * a).toFixed(3));
    } else if (figure == "rectangle") {
        console.log((a * b).toFixed(3));
    } else if (figure == "circle") {
        console.log((Math.PI * a * a).toFixed(3));
    } else {
        console.log((a * b / 2).toFixed(3));
    }

}