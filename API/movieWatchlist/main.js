const myKey = "b28e352b";

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const moviesRender = document.getElementById("movies-render");
let movies = [];

searchBtn.addEventListener("click", searchMovies);

const getInputValue = () => {
  return searchInput.value;
};

const clearInputValue = () => {
  searchInput.value = "";
};

async function searchMovies() {
  const url = `http://www.omdbapi.com/?s=${getInputValue()}&apikey=${myKey}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  if (data.Response === "True") {
    moviesRender.innerHTML = "";

    data.Search.forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie-item");

      movieDiv.innerHTML = `
          <img src="${movie.Poster}" alt="${movie.Title}" />
          <div class="info-wrapper">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>

          </div>
        `;
      moviesRender.appendChild(movieDiv);
      moviesRender.style.backgroundImage = "none";
    });
  } else {
    moviesRender.innerHTML = "<p>No results found.</p>";
  }

  clearInputValue();
}
