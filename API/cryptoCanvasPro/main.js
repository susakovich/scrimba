async function unsplashBackground() {
  try {
    const url =
      "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature";

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch data from the server. Status: ${res.status}`
      );
    }

    const data = await res.json();

    console.log(data);

    document.body.style.backgroundImage = `url(${data.urls.full})`;

    const authorName = document.getElementById("author-name");
    const location = document.getElementById("location");

    authorName.textContent = `By: ${data.user.name}`;
    if (data.location.name) {
      location.textContent = `Location: ${data.location.name}`;
    } else {
      location.textContent = `Location: Unknown`;
    }
  } catch (error) {
    let defaultBackgroundImg =
      "https://images.unsplash.com/photo-1490682143684-14369e18dce8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM4Mzg5NDd8&ixlib=rb-4.0.3&q=85";

    document.body.style.backgroundImage = `url(${defaultBackgroundImg})`;

    console.error("An error occurred:", error);
  }
}

unsplashBackground();

// Crypto Fetching

async function getCryptoStatus() {
  try {
    const url = `https://api.coingecko.com/api/v3/coins/ethereum`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch data from the server. Status: ${res.status}`
      );
    }

    const data = await res.json();
    console.log(data);

    const crypto = document.getElementById("crypto");

    crypto.innerHTML = `
                        <div class="crypto-top">
                            <img src="${data.image.small}">
                            <span>${data.name}</span>
                        </div>
                        <div class="crypto-status">
                            <p>🎯: $${data.market_data.current_price.usd}</p>
                            <p>👆: $${data.market_data.high_24h.usd}</p>
                            <p>👇: $${data.market_data.low_24h.usd}</p>
                        </div>
                       `;

    crypto;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

getCryptoStatus();

// Update Time

function updateTime() {
  const currentTime = new Date();

  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  const currentTimeElement = document.getElementById("time");
  currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateTime();
setInterval(updateTime, 1000);

// Weather fetching

async function getWeather() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const url = `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Weather data not available");
    }

    const data = await res.json();
    console.log(data);
    let icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    const weather = document.getElementById("weather");
    weather.innerHTML = `
                        <div class="weather-top">
                          <img src="${icon}">
                          <span class="weather-temp">${Math.round(
                            data.main.temp
                          )}°</span>
                        </div>
                        <p class="weather-city">${data.name}</p>
                          `;

    console.log(data);
    console.log(position);
  } catch (error) {
    console.error(error);
  }
}

getWeather();

// Facts Fetching

async function getAdvice() {
  const url = "https://api.adviceslip.com/advice";

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  const advice = document.getElementById("advice");
  advice.textContent = `Advice: ${data.slip.advice}`;
}
getAdvice();
setInterval(getAdvice, 20000);

// Quotes

async function getQuote() {
  const url = "https://api.chucknorris.io/jokes/random";

  const res = await fetch(url);
  const data = await res.json();

  console.log("Facts", data);

  const facts = document.getElementById("facts");
  facts.textContent = `${data.value}`;
}
getQuote();
setInterval(getQuote, 20000);
