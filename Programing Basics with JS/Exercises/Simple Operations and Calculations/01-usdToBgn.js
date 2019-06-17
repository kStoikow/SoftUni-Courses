function valute(input) {
    let usd = 1.79549;
    let bgn = Number(input.shift());
    let result = usd * bgn;
    console.log(result.toFixed(2));
}