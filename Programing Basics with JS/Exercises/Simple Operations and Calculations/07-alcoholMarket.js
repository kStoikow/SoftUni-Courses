function alchohol(input){
    let whiskeyPrice = Number(input.shift());
    let beerLitres = Number(input.shift());
    let wineLitres = Number(input.shift());
    let rakiaLitres = Number(input.shift());
    let whiskeyLitres = Number(input.shift());
  
    let rakiaPrice = whiskeyPrice / 2;
    let winePrice = rakiaPrice * 0.6;
    let beerPrice = rakiaPrice * 0.2;
    let moneyNeed = (rakiaLitres * rakiaPrice) + (wineLitres * winePrice) + (beerLitres * beerPrice) + (whiskeyPrice * whiskeyLitres);
 
    console.log(moneyNeed.toFixed(2));
    }
    