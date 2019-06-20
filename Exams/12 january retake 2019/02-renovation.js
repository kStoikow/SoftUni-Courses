function renovationPrice(input){
    let budget = Number(input.shift());
    let floorWidth = Number(input.shift());
    let floorLength = Number(input.shift());
    let triangleSide = Number(input.shift());
    let triangleHeight = Number(input.shift());
    let tilePrice = Number(input.shift());
    let workPrice = Number(input.shift());
    let floor = floorLength * floorWidth;
    let tileArea = (triangleHeight * triangleSide) / 2;
    let tileCount =( Math.ceil(floor / tileArea)) + 5;
    let totalSum = (tileCount * tilePrice) + workPrice;

    if(budget >= totalSum){
        console.log(`${(budget - totalSum).toFixed(2)} lv left.`);
    }else{
        console.log(`You'll need ${(totalSum - budget).toFixed(2)} lv more.`);
    }
}