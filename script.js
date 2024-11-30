let userName = prompt("Please enter your name:");
if (!userName) userName = "User";
document.getElementById("user-name").textContent = userName;

let userScore = 0;
let computerScore = 0;

document.getElementById("generate-button").addEventListener("click", () => {
  if (userScore === 3 || computerScore === 3) return;

  const userNumber = Math.floor(Math.random() * 10) + 1;
  const computerNumber = Math.floor(Math.random() * 10) + 1;

  document.getElementById("user-number").textContent = userNumber;
  document.getElementById("computer-number").textContent = computerNumber;

  if (userNumber > computerNumber) {
    userScore++;
  } else if (computerNumber > userNumber) {
    computerScore++;
  }
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
  if (userScore === 3) {
    document.getElementById("winner-message").textContent = `${userName} wins the game! 🎉`;
    disableGenerateButton();
  } else if (computerScore === 3) {
    document.getElementById("winner-message").textContent = `Computer wins the game! 🤖`;
    disableGenerateButton();
  }
});
document.getElementById("restart-button").addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("user-number").textContent = 0;
  document.getElementById("computer-number").textContent = 0;
  document.getElementById("winner-message").textContent = "";
  document.getElementById("generate-button").disabled = false;
});
function disableGenerateButton() {
  document.getElementById("generate-button").disabled = true;
}
