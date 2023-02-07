const result = document.getElementById("result");
const score = document.getElementById("score");
const choices = document.querySelectorAll("button");

let playerWins = 0;
let computerWins = 0;

const playRound = (playerSelection, computerSelection) => {
if (playerSelection === computerSelection) {
return "Tie game.";
} else if (
(playerSelection === "rock" && computerSelection === "scissors") ||
(playerSelection === "paper" && computerSelection === "rock") ||
(playerSelection === "scissors" && computerSelection === "paper")
) {
playerWins++;
return `You win! ${playerSelection} beats ${computerSelection}.`;
} else {
computerWins++;
return `You lose! ${computerSelection} beats ${playerSelection}.`;
}
};

const getComputerChoice = () => {
const choices = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * 3);
return choices[randomIndex];
};

const game = (playerSelection) => {
const computerSelection = getComputerChoice();
result.textContent = playRound(playerSelection, computerSelection);
score.textContent = `Player: ${playerWins} Computer: ${computerWins}`;

if (playerWins === 5) {
result.textContent = "You are the winner! Starting a new game.";
playerWins = 0;
computerWins = 0;
} else if (computerWins === 5) {
result.textContent = "Computer is the winner! Starting a new game.";
playerWins = 0;
computerWins = 0;
}
};

choices.forEach((choice) => {
choice.addEventListener("click", (e) => {
game(e.target.id);
});
});
