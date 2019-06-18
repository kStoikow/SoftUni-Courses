function problemSolving(input) {
    let lowGrades = Number(input.shift());
    let countForBadGrades = 0;
    let sumGrades = 0;
    let countForGoodGrades = 0;
    let lastProblem = "";

    while (countForBadGrades < lowGrades) {
        let nameOfExercise = input.shift();
        let grade = Number(input.shift());

        if (nameOfExercise === "Enough") {
            console.log(`Average score: ${(sumGrades / (countForBadGrades + countForGoodGrades)).toFixed(2)}`);
            console.log(`Number of problems: ${countForBadGrades + countForGoodGrades}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }

        sumGrades += grade;
        lastProblem = nameOfExercise;

        if (grade > 4) {
            countForGoodGrades++;
        } else {
            countForBadGrades++;
        }
    }

    if (countForBadGrades === lowGrades) {
        console.log(`You need a break, ${countForBadGrades} poor grades.`);
    }
}