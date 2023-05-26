import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  set,
  child,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://warcraft-7f7b1-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const warcraftDB = ref(database, "warcraftLogs");

const btnSend = document.getElementById("btnSend");
const textArea = document.getElementById("inputField");
const inputFrom = document.getElementById("inputFrom");
const inputTo = document.getElementById("inputTo");

btnSend.addEventListener("click", () => {
  let textAreaValue = textArea.value;
  let inputFromValue = inputFrom.value;
  let inputToValue = inputTo.value;

  if (textAreaValue.trim() !== "") {
    const newMessageRef = push(warcraftDB);
    const messageId = newMessageRef.key;

    const messageData = {
      from: inputFromValue,
      to: inputToValue,
      content: textAreaValue,
    };

    set(child(warcraftDB, messageId), messageData);
  }

  clearTextArea();
  clearInputFields();
});

const clearTextArea = () => (textArea.value = "");
const clearMessageField = () => (messageField.innerHTML = "");
const clearInputFields = () => {
  inputFrom.value = "";
  inputTo.value = "";
};

onValue(warcraftDB, function (snapshot) {
  if (snapshot.exists()) {
    let warcraftMsg = Object.entries(snapshot.val());

    clearMessageField();

    for (let i = 0; i < warcraftMsg.length; i++) {
      let warcraftMessages = warcraftMsg[i];
      let warcraftMsgID = warcraftMsg[0];
      let warcraftMsgValue = warcraftMsg[1];

      appendToMessageField(warcraftMessages);
    }
  } else {
    messageField.innerHTML =
      "You still haven't send any messages, what are you waiting for?";
  }
});

function appendToMessageField(msg) {
  let msgID = msg[0];
  let msgValue = msg[1];
  let fromValue = msgValue.from;
  let contentValue = msgValue.content;
  let toValue = msgValue.to;

  let messageWrapper = document.createElement("div");
  messageWrapper.classList.add("message-wrapper");

  let fromSpan = document.createElement("span");
  fromSpan.classList.add("fromSpan");
  fromSpan.textContent = "From: " + fromValue;

  let newDiv = document.createElement("div");
  newDiv.textContent = contentValue;

  let toSpan = document.createElement("span");
  toSpan.classList.add("toSpan");
  toSpan.textContent = "To: " + toValue;

  messageWrapper.appendChild(fromSpan);
  messageWrapper.appendChild(newDiv);
  messageWrapper.appendChild(toSpan);

  messageField.appendChild(messageWrapper);

  clearInputFields();
}
