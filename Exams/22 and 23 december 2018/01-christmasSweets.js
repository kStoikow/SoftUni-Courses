function money(input) {
    let baklawaPrice = Number(input.shift());
    let muffinPrice = Number(input.shift());
    let shtolenKg = Number(input.shift());
    let bonbonKg = Number(input.shift());
    let biscuitsKg = Number(input.shift());
    let shtolenPrice = baklawaPrice * 1.6;
    let bonbonPrice = muffinPrice * 1.8;
    let totalSum = (shtolenKg * shtolenPrice) + (bonbonKg * bonbonPrice) + (biscuitsKg * 7.5);
    console.log(totalSum.toFixed(2))
}