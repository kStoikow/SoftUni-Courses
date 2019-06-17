function commissions(input) {
    let city = input.shift();
    let sales = Number(input.shift());
    let comissionPercent = 0;

    if (city === "Sofia") {

        if (sales >= 0 && sales <= 500) {
            comissionPercent = 5 / 100;
        } else if (sales > 500 && sales <= 1000) {
            comissionPercent = 7 / 100;
        } else if (sales > 1000 && sales <= 10000) {
            comissionPercent = 8 / 100;
        } else if (sales > 10000) {
            comissionPercent = 12 / 100;
        } else {
            console.log("error");
        }

        if (comissionPercent > 0) {
            console.log((sales * comissionPercent).toFixed(2));
        }

    } else if (city === "Varna") {

        if (sales >= 0 && sales <= 500) {
            comissionPercent = 4.5 / 100;
        } else if (sales > 500 && sales <= 1000) {
            comissionPercent = 7.5 / 100;
        } else if (sales > 1000 && sales <= 10000) {
            comissionPercent = 10 / 100;
        } else if (sales > 10000) {
            comissionPercent = 13 / 100;
        } else {
            console.log("error");
        }

        if (comissionPercent > 0) {
            console.log((sales * comissionPercent).toFixed(2));
        }

    } else if (city === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            comissionPercent = 5.5 / 100;
        } else if (sales > 500 && sales <= 1000) {
            comissionPercent = 8 / 100;
        } else if (sales > 1000 && sales <= 10000) {
            comissionPercent = 12 / 100;
        } else if (sales > 10000) {
            comissionPercent = 14.5 / 100;
        } else {
            console.log("error");
        }

        if (comissionPercent > 0) {
            console.log((sales * comissionPercent).toFixed(2));
        }

    } else {
        console.log("error");
    }

}