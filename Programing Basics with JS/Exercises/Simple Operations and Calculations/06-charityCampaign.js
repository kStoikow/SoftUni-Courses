function charity(input) {
    let days = Number(input.shift());
    let cookers = Number(input.shift());
    let cakes = Number(input.shift());
    let wafers = Number(input.shift());
    let pancakes = Number(input.shift());

    let cakesSumPerDay = cakes * 45;
    let wafflesSumPerDay = wafers * 5.8;
    let pancakeSumPerDay = pancakes * 3.2;
    let allProductsPricePerDay = days * (cakesSumPerDay + pancakeSumPerDay + wafflesSumPerDay);
    let wholePrice = allProductsPricePerDay * cookers;
    let charityPrice = wholePrice - (wholePrice * 0.125);

    console.log(charityPrice.toFixed(2));
}