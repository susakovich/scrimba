import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://champs-cc290-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const champsDB = ref(database, "champs");

const inputFieldEl = document.getElementById("inputField");
const publishBtnEl = document.getElementById("publish");
const endorsementsEl = document.getElementById("endorsments");

const inputFrom = document.getElementById("inputFrom");
const inpuTo = document.getElementById("inputTo");

publishBtnEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;

  if (inputValue.trim() !== "") {
    push(champsDB, inputValue);
  }
  clearInputFieldEl();
});

onValue(champsDB, function (snapshot) {
  if (snapshot.exists()) {
    let itemsObject = snapshot.val();
    let itemsArray = Object.entries(itemsObject);

    clearEndorsementsList();

    for (let i = 0; i < itemsArray.length; i++) {
      let currentItem = itemsArray[i];
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1];

      appendEndorsementToList(currentItemValue);
    }
  } else {
    endorsementsEl.innerHTML = "You don't have endorsements";
  }
});

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function clearEndorsementsList() {
  endorsementsEl.innerHTML = "";
}

function appendEndorsementToList(itemValue) {
  let newDiv = document.createElement("div");
  newDiv.textContent = itemValue;

  newDiv.classList.add("endorsement-item");

  endorsementsEl.appendChild(newDiv);
}
