function moneyIncome(input) {
    let sectors = Number(input[0]);
    let stadiumCapacity = Number(input[1]);
    let ticketPrice = Number(input[2]);
    let sectorIncome = stadiumCapacity * ticketPrice / sectors;
    let tottalIncome = (sectorIncome * sectors);
    let charity = (tottalIncome - (sectorIncome * 0.75)) / 8;
    console.log(`Total income - ${tottalIncome.toFixed(2)} BGN`);
    console.log(`Money for charity - ${charity.toFixed(2)} BGN`);
}