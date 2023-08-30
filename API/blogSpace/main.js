const url = "https://apis.scrimba.com/jsonplaceholder/posts";

const blogList = document.getElementById("blog-list");
const postBtn = document.getElementById("post-btn");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");

let postsArray = [];

function renderPosts() {
  let html = "";
  for (let post of postsArray) {
    html += `
              <h3>Title: ${post.title}</h3>
              <p>Body: ${post.body}</p>
             `;
  }
  blogList.innerHTML = html;
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts();
  });

postBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let posts = {
    title: postTitle.value,
    body: postBody.value,
  };

  let postUrl = "https://apis.scrimba.com/jsonplaceholder/posts";

  fetch(postUrl, {
    method: "POST",
    body: JSON.stringify(posts),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      postsArray.unshift(data);
      renderPosts();
    });
  clearFields();
});

const clearFields = () => {
  postTitle.value = "";
  postBody.value = "";
};
