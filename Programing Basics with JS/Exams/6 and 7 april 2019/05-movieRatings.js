function ratings(input) {
    let moviesToRate = Number(input.shift());
    let highestRatingName = '';
    let highestMovieRate = 0;
    let lowestRatingName = '';
    let lowestMovieRate = 10;
    let averageRating = 0;

    for (let i = 0; i < moviesToRate; i++) {
        let movieName = input.shift();
        let currentRating = Number(input.shift());

        if (currentRating > highestMovieRate) {
            highestRatingName = movieName;
            highestMovieRate = currentRating;
        }

        if (currentRating <= lowestMovieRate) {
            lowestRatingName = movieName;
            lowestMovieRate = currentRating;
        }

        averageRating += currentRating;
    }
    console.log(`${highestRatingName} is with highest rating: ${highestMovieRate.toFixed(1)}`);
    console.log(`${lowestRatingName} is with lowest rating: ${lowestMovieRate.toFixed(1)}`);
    console.log(`Average rating: ${(averageRating / moviesToRate).toFixed(1)}`);
}