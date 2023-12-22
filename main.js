
function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (!choices.includes(userChoice)) {
        throw new Error("Invalid choice. Please enter rock, paper, or scissors.");
    }

    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

module.exports = { playGame };
