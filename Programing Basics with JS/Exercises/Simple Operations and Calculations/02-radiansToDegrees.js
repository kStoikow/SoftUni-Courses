function radiants(input) {
    let radiants = Number(input.shift());
    let degree = radiants * 180 / Math.PI;
    console.log(degree.toFixed(0));
}