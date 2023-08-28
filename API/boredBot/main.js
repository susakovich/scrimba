/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/

const boredText = document.getElementById("bored-text");
const boredBtn = document.getElementById("bored-btn");

let url = "https://apis.scrimba.com/bored/api/activity";

boredBtn.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      boredText.innerHTML = `<p class="bored-p">Activity: ${data.activity}</p>
                            <p class="bored-p">Type: ${data.type}</p>
                            `;
      console.log(data);
    });
});
