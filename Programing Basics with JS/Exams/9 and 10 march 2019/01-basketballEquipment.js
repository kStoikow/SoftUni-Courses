function toPay(input) {
    let tax = Number(input.shift());
    let sneakers = tax * 0.6;
    let outfit = sneakers * 0.8;
    let ball = outfit * 0.25;
    let accessories = ball * 0.2;
    console.log((tax + sneakers + outfit + ball + accessories).toFixed(2));
}