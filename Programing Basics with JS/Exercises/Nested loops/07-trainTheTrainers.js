function examGrades(input) {
    let judgeCount = Number(input.shift());
    let presentation = input.shift();
    let avgGradeForExam = 0;
    let presentationCounter= 0;

    while (presentation !== "Finish") {
        presentationCounter++;
        let currentAverageGrade = 0;
        
        for (let grades = 1; grades <= judgeCount; grades++) {
            let currentGrade = Number(input.shift());
            currentAverageGrade += currentGrade;
        }

        currentAverageGrade /= judgeCount;
        console.log(`${presentation} - ${currentAverageGrade.toFixed(2)}.`);
        avgGradeForExam += currentAverageGrade;
        presentation = input.shift();
    }

    avgGradeForExam /= presentationCounter;
    console.log(`Student's final assessment is ${avgGradeForExam.toFixed(2)}.`);
}