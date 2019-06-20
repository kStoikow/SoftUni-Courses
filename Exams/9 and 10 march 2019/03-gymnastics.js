function grades(input){
let country = input.shift();
let category = input.shift();
let gradeForDifficulty = 0;
let gradeForPerformance = 0;

if(country === "Russia"){

    if(category === "ribbon"){
        gradeForDifficulty = 9.100;
        gradeForPerformance = 9.400;
    }else if(category === "hoop"){
        gradeForDifficulty = 9.300;
        gradeForPerformance = 9.800;
    }else{
        gradeForDifficulty = 9.600;
        gradeForPerformance = 9.000;
    }

}else if(country === "Bulgaria"){

    if(category === "ribbon"){
        gradeForDifficulty = 9.600;
        gradeForPerformance = 9.400;
    }else if(category === "hoop"){
        gradeForDifficulty = 9.550;
        gradeForPerformance = 9.750;
    }else{
        gradeForDifficulty = 9.500;
        gradeForPerformance = 9.400;
    }

}else{

    if(category === "ribbon"){
        gradeForDifficulty = 9.200;
        gradeForPerformance = 9.500;
    }else if(category === "hoop"){
        gradeForDifficulty = 9.450;
        gradeForPerformance = 9.350;
    }else{
        gradeForDifficulty = 9.700;
        gradeForPerformance = 9.150;
    }
}

let poitsForPerfect = ((20 - (gradeForDifficulty + gradeForPerformance)) / 20) * 100;
console.log(`The team of ${country} get ${(gradeForDifficulty + gradeForPerformance).toFixed(3)} on ${category}.`);
console.log(`${poitsForPerfect.toFixed(2)}%`);
}