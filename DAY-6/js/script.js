const likeButton = document.querySelector(".btn-like");
const unlikeButton = document.querySelector(".btn-unlike");

const likeCount = document.querySelector(".like-count");

let like = 0;
likeButton.addEventListener("click", () => {
  console.log("like button clicked");

  likes++;
  likeCount.innerHTML = `${likes} Likes`;
});
unlikeButton.addEventListener("click", () => {
  console.log("unlike button clicked");

  if (likes > 0) {
    likes--;
  }
});
