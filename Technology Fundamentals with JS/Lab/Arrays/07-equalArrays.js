function areEqual(leftArr, rightArr) {
       let sum = 0;

    for (let i = 0; i < leftArr.length; i++) {
        if (leftArr[i] === rightArr[i]) {
        sum+=Number(leftArr[i]);   
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
        console.log(`Arrays are identical. Sum: ${sum}`);
}
areEqual(['10'], ['-10'])