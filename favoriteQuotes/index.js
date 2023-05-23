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
    "https://favourite-quotes-2859a-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const quotesInDB = ref(database, "favourite-quotes");

const inputField = document.getElementById("inputField");
const addQuote = document.getElementById("addQuote");
const quotesListEl = document.getElementById("quotesList");
const removeQuotes = document.getElementById("removeQuotes");

addQuote.addEventListener("click", function () {
  let inputValue = inputField.value;

  if (inputValue.trim() !== "") {
    push(quotesInDB, inputValue);
  }
  clearInputFieldEl();
});

onValue(quotesInDB, function (snapshot) {
  if (snapshot.exists()) {
    let quotesArray = Object.entries(snapshot.val());

    clearQuotesListEl();

    for (let i = 0; i < quotesArray.length; i++) {
      let curentQuote = quotesArray[i];
      let currentQuoteID = quotesArray[0];
      let currentQuoteValue = quotesArray[1];

      appendQuotesToList(curentQuote);
    }
  } else {
    quotesListEl.innerHTML = "You don't have any quotes...";
  }
});

function clearQuotesListEl() {
  quotesListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputField.value = "";
}

function appendQuotesToList(quote) {
  let quoteID = quote[0];
  let quoteValue = quote[1];

  let newEl = document.createElement("li");

  newEl.textContent = quoteValue;

  newEl.addEventListener("click", () => {
    let exactLocationOfQuoteInDB = ref(
      database,
      `/favourite-quotes/${quoteID}`
    );
    remove(exactLocationOfQuoteInDB);
  });

  removeQuotes.addEventListener("click", () => {
    let exactLocationOfQuoteInDB = ref(
      database,
      `/favourite-quotes/${quoteID}`
    );
    remove(exactLocationOfQuoteInDB);
  });
  quotesListEl.append(newEl);
}
