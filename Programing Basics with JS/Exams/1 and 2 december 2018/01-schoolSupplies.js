function preparation(input) {
    let penQuantity = Number(input.shift());
    let markerQuantity = Number(input.shift());
    let cleaningLiquidLitres = Number(input.shift());
    let discountPercentage = Number(input.shift());
    let afterDiscount = ((penQuantity * 5.8) + (markerQuantity * 7.2) + (cleaningLiquidLitres * 1.2)) * (discountPercentage / 100);
    let totalSum = ((penQuantity * 5.8) + (markerQuantity * 7.2) + (cleaningLiquidLitres * 1.2)) - afterDiscount;
    console.log(totalSum.toFixed(3));
}