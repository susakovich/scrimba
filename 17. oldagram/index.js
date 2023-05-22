const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

// // Function to render the posts
// function renderPosts() {
//   const container = document.querySelector(".container");

//   // Loop through the posts array
//   for (let i = 0; i < posts.length; i++) {
//     const post = posts[i];

//     // Create the wrapper div for the post
//     const postWrapper = document.createElement("div");
//     postWrapper.classList.add("post-wrapper");

//     // Create the HTML structure for the post
//     const postInfoWrapper = document.createElement("div");
//     postInfoWrapper.classList.add("main__user-post-info", "padding-left");

//     const avatarImg = document.createElement("img");
//     avatarImg.src = post.avatar;
//     avatarImg.alt = `${post.name} avatar picture`;
//     avatarImg.classList.add("main__user-post-info-avatar");
//     postInfoWrapper.appendChild(avatarImg);

//     const userTextWrapper = document.createElement("div");
//     userTextWrapper.classList.add("main__user-text-wrapper");

//     const username = document.createElement("h3");
//     username.textContent = post.name;
//     userTextWrapper.appendChild(username);

//     const location = document.createElement("span");
//     location.classList.add("main__user-post-info-location");
//     location.textContent = post.location;
//     userTextWrapper.appendChild(location);

//     postInfoWrapper.appendChild(userTextWrapper);
//     postWrapper.appendChild(postInfoWrapper);

//     const postImg = document.createElement("img");
//     postImg.src = post.post;
//     postImg.alt = `${post.name} portrait`;
//     postImg.classList.add("main__user-post-picture");
//     postWrapper.appendChild(postImg);

//     const btnsWrapper = document.createElement("div");
//     btnsWrapper.classList.add("main__user-post-btns", "padding-left");

//     const likeBtn = document.createElement("button");
//     likeBtn.id = "main__user-post-likeBtn";
//     likeBtn.addEventListener("click", function () {
//       // Update the like count
//       post.likes++;
//       // Get the likes element and update the text
//       const likesCount = postWrapper.querySelector(
//         ".main__user-post-info-likes"
//       );
//       likesCount.textContent = `${post.likes} likes`;
//     });
//     btnsWrapper.appendChild(likeBtn);

//     const likeIcon = document.createElement("img");
//     likeIcon.id = "love";
//     likeIcon.src = "./images/icon-heart.png";
//     likeIcon.alt = "Like button";
//     likeBtn.appendChild(likeIcon);

//     const commentBtn = document.createElement("button");
//     commentBtn.id = "main__user-post-commentBtn";
//     btnsWrapper.appendChild(commentBtn);

//     const commentIcon = document.createElement("img");
//     commentIcon.src = "./images/icon-comment.png";
//     commentIcon.alt = "Post button";
//     commentBtn.appendChild(commentIcon);

//     const dmBtn = document.createElement("button");
//     dmBtn.id = "main__user-post-dmBtn";
//     btnsWrapper.appendChild(dmBtn);

//     const dmIcon = document.createElement("img");
//     dmIcon.src = "./images/icon-dm.png";
//     dmIcon.alt = "DM button";
//     dmBtn.appendChild(dmIcon);

//     postWrapper.appendChild(btnsWrapper);

//     const likesCount = document.createElement("span");
//     likesCount.classList.add("main__user-post-info-likes", "padding-left");
//     likesCount.textContent = `${post.likes} likes`;
//     postWrapper.appendChild(likesCount);

//     const commentText = document.createElement("p");
//     commentText.classList.add("main__user-post-info-comment", "padding-left");
//     const commentName = document.createElement("span");
//     commentName.classList.add("main__user-post-info-name");
//     commentName.textContent = post.username;
//     commentText.appendChild(commentName);
//     commentText.innerHTML += ` ${post.comment}`;
//     postWrapper.appendChild(commentText);

//     container.appendChild(postWrapper);
//   }
// }

// // Call the function to render the posts
// renderPosts();
