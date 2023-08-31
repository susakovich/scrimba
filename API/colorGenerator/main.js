const colorBtn = document.getElementById("color-btn");
const displayColor = document.getElementById("display-color");
const displayName = document.getElementById("display-name");

const renderColor = (data) => {
  let htmlColor = "";
  let htmlName = "";
  for (let color of data.colors) {
    htmlColor += `<div class='result-color' style="background-color: ${color.hex.value}"></div>`;
    htmlName += `<div class='result-name'>${color.hex.value}</div>`;
  }
  displayColor.innerHTML = htmlColor;
  displayName.innerHTML = htmlName;
};

const fetchColors = () => {
  const seedColor = document.getElementById("seed-color").value.substring(1);
  const colorMode = document.getElementById("color-mode").value.toLowerCase();
  const url = `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorMode}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => renderColor(data));
};

colorBtn.addEventListener("click", fetchColors);
