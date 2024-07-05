let userScore = 0;
let compScore = 0;

let userScoreDisplay = document.querySelector("#Userscore");
let compScoreDisplay = document.querySelector("#compscore");
let displayBoard = document.querySelector("#displayboard");

const reset = document.querySelector(".msg")

const options = ["rock", "paper", "scissors"];

function comprandom() {
    let randomnum = Math.floor(Math.random() * 3);
    return options[randomnum];
}

function playGame(userChoice) {
    let compChoice = comprandom();

    if (userChoice === compChoice) {
        displayBoard.innerHTML = `It's a tie! You both chose ${userChoice}.`;
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        userScore++;
        userScoreDisplay.innerHTML = userScore;
        displayBoard.innerHTML = `You win! ${userChoice} beats ${compChoice}.`;
    } else {
        compScore++;
        compScoreDisplay.innerHTML = compScore;
        displayBoard.innerHTML = `You lose! ${compChoice} beats ${userChoice}.`;
    }
}

document.querySelector("#rock").addEventListener("click", () => {
    playGame("rock");
});

document.querySelector("#paper").addEventListener("click", () => {
    playGame("paper");
});

document.querySelector("#scissors").addEventListener("click", () => {
    playGame("scissors");
});

reset.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreDisplay.innerHTML = userScore;
    compScoreDisplay.innerHTML = compScore;
    displayBoard.innerHTML = ""
})