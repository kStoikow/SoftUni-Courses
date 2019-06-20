function toPay(input){
let rent = Number(input.shift());
let statuette = rent * 0.7;
let catering = statuette * 0.85;
let sounding = catering * 0.5;
console.log((rent + statuette + catering + sounding).toFixed(2));
}