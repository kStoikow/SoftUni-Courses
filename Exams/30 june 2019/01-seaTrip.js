function price(input) {
    let foodMoney = Number(input.shift());
    let souvenirMoney = Number(input.shift());
    let hotelMoney = Number(input.shift());
    let days = 3;
    let distanceKm = 420;
    let gasolinePer100Km = 7;
    let gasolinePrice = 1.85;
    let travelPrice = ((distanceKm / 100) * gasolinePer100Km) * gasolinePrice;
    let souvenirsAndFoodPrice = (days * souvenirMoney) + (days * foodMoney);
    let hotelPrice = (hotelMoney * 0.9) + (hotelMoney * 0.85) + (hotelMoney * 0.8);
    let totalSum = hotelPrice + souvenirsAndFoodPrice + travelPrice;
    console.log(`Money needed: ${totalSum.toFixed(2)}`);
}