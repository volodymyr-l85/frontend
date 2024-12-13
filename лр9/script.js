let userName = prompt("Please enter your name:");
if (!userName) userName = "User"; 
document.getElementById("user-name").textContent = userName;

let userScore = 0;
let computerScore = 0;
let userCards = [];
let computerCards = [];
const cardValues = {
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "Jack": 2,
  "Queen": 3,
  "King": 4,
  "Ace": 11
};
function getRandomCard() {
  const cardNames = Object.keys(cardValues);
  const randomCard = cardNames[Math.floor(Math.random() * cardNames.length)];
  return { name: randomCard, value: cardValues[randomCard] };
}
function updateDisplay() {
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("user-cards").textContent = userCards.map(card => card.name).join(', ');
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("computer-cards").textContent = computerCards.map(card => card.name).join(', ');
  if (userScore > 21 && computerScore > 21) {
    document.getElementById("winner-message").textContent = "It's a draw! Both exceeded 21!";
  } else if (userScore > 21) {
    document.getElementById("winner-message").textContent = `Computer wins! ${computerScore} vs ${userScore}`;
  } else if (computerScore > 21) {
    document.getElementById("winner-message").textContent = `${userName} wins! ${userScore} vs ${computerScore}`;
  } else if (userScore === 21 && computerScore === 21) {
    document.getElementById("winner-message").textContent = "It's a tie! Both have 21!";
  } else if (userScore === 21) {
    document.getElementById("winner-message").textContent = `${userName} wins with 21!`;
  } else if (computerScore === 21) {
    document.getElementById("winner-message").textContent = `Computer wins with 21!`;
  }
}
document.getElementById("generate-button").addEventListener("click", () => {
  const userCard = getRandomCard();
  const computerCard = getRandomCard();
  userScore += userCard.value;
  computerScore += computerCard.value;
  userCards.push(userCard);
  computerCards.push(computerCard);
  updateDisplay();
  if (userScore > 21 || computerScore > 21) {
    document.getElementById("generate-button").disabled = true;
  }
});
document.getElementById("restart-button").addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userCards = [];
  computerCards = [];
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("user-cards").textContent = "";
  document.getElementById("computer-cards").textContent = "";
  document.getElementById("winner-message").textContent = "";
  document.getElementById("generate-button").disabled = false;
});


