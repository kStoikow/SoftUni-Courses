function tournament(input) {
    let target = Number(input.shift());
    let jumpsCount = 0;
    let startingJumpHeight = target - 30;
    let isFailed = false;

    while (startingJumpHeight <= target) {

        for (let j = 1; j <= 3; j++) {
            let currentJump = Number(input.shift());
            jumpsCount++;

            if (currentJump > startingJumpHeight) {
                startingJumpHeight += 5;
                break;
            }

            if (j === 3) {
                console.log(`Tihomir failed at ${startingJumpHeight}cm after ${jumpsCount} jumps.`);
                isFailed = true;
            }
        }

        if (isFailed) {
            break;
        }
    }

    if (!isFailed) {
        console.log(`Tihomir succeeded, he jumped over ${target}cm after ${jumpsCount} jumps.`);
    }
}