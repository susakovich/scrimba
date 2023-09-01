let deckId;
const cards = document.getElementById("cards");
const winner = document.getElementById("winner");
const drawCards = document.getElementById("two-cards-btn");
const computerScoreEl = document.getElementById("computer-score");
const playerScoreEl = document.getElementById("player-score");
let computerScore = 0;
let playerScore = 0;

async function handleClick() {
  let url = "https://www.deckofcardsapi.com/api/deck/new/shuffle";

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  cards.innerHTML = `
      <p>Remaining cards:${data.remaining}</p>
    `;
  deckId = data.deck_id;
}

document.getElementById("new-deck-btn").addEventListener("click", handleClick);

async function twoNewCards() {
  let url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
  if (!deckId) {
    alert("You first need to get deck, so click that button left from me.");
  }

  const res = await fetch(url);
  const data = await res.json();
  cards.innerHTML = `
      <div class="cards-wrapper">
        <div class="computer-card">
          <img class="card" src="${data.cards[0].image}">
        </div>
        <p class="remaining-cards">Remaining cards: ${data.remaining}</p>
        <div class="player-card">  
          <img class="card" src="${data.cards[1].image}">
        </div>
      </div>
    `;

  const winnerText = determineCardWinner(data.cards[0], data.cards[1]);
  winner.textContent = winnerText;

  if (data.remaining === 0) {
    drawCards.classList.add("disabled");
    if (computerScore > playerScore) {
      winner.textContent = `The computer won the game! More luck next time!`;
    } else if (playerScore > computerScore) {
      winner.textContent = `You won the game! More luck next time AI!`;
    } else {
      winner.textContent = `Oh, it's a tie, maybe try another round.`;
    }
  }
}

drawCards.addEventListener("click", twoNewCards);

function determineCardWinner(card1, card2) {
  const valueOptions = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];
  const card1ValueIdx = valueOptions.indexOf(card1.value);
  const card2ValueIdx = valueOptions.indexOf(card2.value);

  if (card1ValueIdx > card2ValueIdx) {
    computerScore++;
    computerScoreEl.textContent = `Computer score: ${computerScore}`;
    return `Computer wins!`;
  } else if (card1ValueIdx < card2ValueIdx) {
    playerScore++;
    playerScoreEl.textContent = `Player score: ${playerScore}`;
    return `Player wins!`;
  } else {
    return `WAR!`;
  }
}
