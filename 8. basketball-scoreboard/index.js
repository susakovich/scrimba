let homeResult = document.getElementById("home-result");
let guestResult = document.getElementById("guest-result");
let winner = document.getElementById("winner");

let homeCount = 0;
let guestCount = 0;

function updateWinner() {
  if (homeCount > guestCount) {
    winner.textContent = `The Home is leading by ${
      homeCount - guestCount
    } points!`;
  } else if (homeCount < guestCount) {
    winner.textContent = `The Guest is leading by ${
      guestCount - homeCount
    } points!`;
  } else {
    winner.textContent = "It's a tie!";
  }
}

function addOneHome() {
  homeCount++;
  homeResult.textContent = homeCount;
  updateWinner();
}

function addTwoHome() {
  homeCount += 2;
  homeResult.textContent = homeCount;
  updateWinner();
}

function addThreeHome() {
  homeCount += 3;
  homeResult.textContent = homeCount;
  updateWinner();
}

// Guest counter
function addOneGuest() {
  guestCount++;
  guestResult.textContent = guestCount;
  updateWinner();
}

function addTwoGuest() {
  guestCount += 2;
  guestResult.textContent = guestCount;
  updateWinner();
}

function addThreeGuest() {
  guestCount += 3;
  guestResult.textContent = guestCount;
  updateWinner();
}

function newGame() {
  homeResult.textContent = 0;
  guestResult.textContent = 0;
  homeCount = 0;
  guestCount = 0;
  updateWinner();
  winner.textContent = "Game is starting soon";
}
