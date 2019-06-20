function squenceOfLetters(input) {
    let letterA = "a".charCodeAt(0)
    let letterZ = `z`.charCodeAt(0);

    for (let i = letterA; i <= letterZ; i++) {
        console.log(String.fromCharCode(Number(i)));
    }
}