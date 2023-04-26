const choices = document.querySelectorAll("button");
const result = document.querySelector("#result");

choices.forEach(choice => {
    choice.addEventListener("click", function () {
        const computerChoice = getComputerChoice();
        const playerChoice = this.textContent;
        const winner = getWinner(playerChoice, computerChoice);

        displayResult(winner, playerChoice, computerChoice);
    });
});

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "Player Wins";
    } else {
        return "Computer Wins";
    }
}

function displayResult(winner, playerChoice, computerChoice) {
    result.textContent = `Player chose ${playerChoice}, Computer chose ${computerChoice}. ${winner}`;
}
