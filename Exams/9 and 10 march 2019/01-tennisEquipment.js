function toPay(input) {
    let rocketPrice = Number(input.shift());
    let rocketCount = Number(input.shift());
    let sneakersCount = Number(input.shift());
    let sneakersPrice = rocketPrice / 6;
    let totalRocketPrice = rocketCount * rocketPrice;
    let totalSneakersPrice = sneakersCount * sneakersPrice;
    let otherEquipmentsPrice = (totalRocketPrice + totalSneakersPrice) * 0.2;
    let priceToPay = (totalRocketPrice + totalSneakersPrice + otherEquipmentsPrice);
    console.log(`Price to be paid by Djokovic ${Math.floor(priceToPay / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(priceToPay - (priceToPay / 8))}`);
}