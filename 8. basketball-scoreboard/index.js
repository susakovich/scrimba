let homeResult = document.getElementById("home-result");
let guestResult = document.getElementById("guest-result");

let homeCount = 0;
let guestCount = 0;

function addOneHome() {
  homeCount++;
  homeResult.textContent = homeCount;
}

function addTwoHome() {
  homeCount += 2;
  homeResult.textContent = homeCount;
}

function addThreeHome() {
  homeCount += 3;
  homeResult.textContent = homeCount;
}

// Guest counter
function addOneGuest() {
  guestCount++;
  guestResult.textContent = guestCount;
}

function addTwoGuest() {
  guestCount += 2;
  guestResult.textContent = guestCount;
}

function addThreeGuest() {
  guestCount += 3;
  guestResult.textContent = guestCount;
}

function newGame() {
  homeResult.textContent = 0;
  guestResult.textContent = 0;
  homeCount = 0;
  guestCount = 0;
}
