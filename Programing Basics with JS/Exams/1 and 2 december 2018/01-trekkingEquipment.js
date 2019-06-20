function price(input) {
    let alpinists = Number(input.shift());
    let carabiners = Number(input.shift());
    let ropes = Number(input.shift());
    let pickaxes = Number(input.shift());
    let equipmentMoney = ((carabiners * 36) + (ropes * 3.6) + (pickaxes * 19.8)) * alpinists;
    let afterVat = equipmentMoney * 1.2;
    console.log(afterVat.toFixed(2));
}