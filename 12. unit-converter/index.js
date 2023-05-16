/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("inputBtn");
const converter = document.getElementById("converter");
const lengthInfo = document.getElementById("length-info");
const volumeInfo = document.getElementById("volume-info");
const massInfo = document.getElementById("mass-info");

converter.addEventListener("click", function () {
  let number = input.value;
  number = Number(number);

  calcLength(number);
  calcVolume(number);
  calcMass(number);
});

function calcLength(a) {
  let value1 = (a * 3.281).toFixed(3);
  let value2 = (a * 0.305).toFixed(3);

  lengthInfo.innerHTML = `${a} meters = ${value1} feet | ${a} feet = ${value2} meters`;
}

function calcVolume(a) {
  let value1 = (a * 0.264).toFixed(3);
  let value2 = (a * 3.788).toFixed(3);

  volumeInfo.innerHTML = `${a} liters = ${value1} gallons | ${a} gallons = ${value2} liters`;
}

function calcMass(a) {
  let value1 = (a * 2.204).toFixed(3);
  let value2 = (a * 0.454).toFixed(3);

  massInfo.innerHTML = `${a} kilos = ${value1} pounds | ${a} pounds = ${value2} kilos`;
}
