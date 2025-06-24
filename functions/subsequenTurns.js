const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const target = Math.floor(Math.random() * 100) + 1;
let guesses = [];

function askGuess() {
    readline.question("Enter your guess (1 to 100): ", input => {
        const guess = parseInt(input);

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
            askGuess();
            return;
        }

        if (guess < 1 || guess > 100) {
            console.log("OUT OF BOUNDS!");
            askGuess();
            return;
        }

        guesses.push(guess);

        if (guess === target) {
            console.log(`You guessed correctly in ${guesses.length} guess(es)!`);
            readline.close();
            return;
        }

        const diff = Math.abs(guess - target);

        if (guesses.length === 1) {
            console.log(diff <= 10 ? "WATCH!" : "COLD!");
        } else {
            const prevDiff = Math.abs(guesses[guesses.length - 2] - target);
            console.log(diff < prevDiff ? "WARMER!" : "COLDER!");
        }

        askGuess();
    });
}

askGuess();
