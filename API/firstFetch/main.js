/**
Challenge:

1. Fetch a random image from the Dog API again 
(https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
API as an image `src` property (probably easiest if 
you create the image completely here in the JS and add 
it as the innerHTML of another element on the DOM)
*/

let url = "https://dog.ceo/api/breeds/image/random";
const callDoggo = document.getElementById("callDoggo");
const imgContainer = document.getElementById("img-container");

callDoggo.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      imgContainer.innerHTML = `<img src="${data.message}">`;
      console.log(data);
    });
});
