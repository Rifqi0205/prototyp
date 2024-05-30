let isLiked = false;
let isDisliked = false;

const toggleLike = () => {
    const likeBtn = document.getElementById("likeBtn");
    const likeCount = document.getElementById("likeCount");

    if (isLiked) {
        isLiked = false;
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
        likeBtn.classList.remove("bi-heart-fill");
        likeBtn.classList.add("bi-heart");
    }else{
        isLiked = true;
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
        likeBtn.classList.remove("bi-heart");
        likeBtn.classList.add("bi-heart-fill");
    }

}
const toggleLike1 = () => {
    const likeBtn = document.getElementById("likeBtn1");
    const likeCount = document.getElementById("likeCount1");

    if (isLiked) {
        isLiked = false;
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
        likeBtn.classList.remove("bi-heart-fill");
        likeBtn.classList.add("bi-heart");
    }else{
        isLiked = true;
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
        likeBtn.classList.remove("bi-heart");
        likeBtn.classList.add("bi-heart-fill");
    }

}
const toggleLike2 = () => {
    const likeBtn = document.getElementById("likeBtn2");
    const likeCount = document.getElementById("likeCount2");

    if (isLiked) {
        isLiked = false;
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
        likeBtn.classList.remove("bi-heart-fill");
        likeBtn.classList.add("bi-heart");
    }else{
        isLiked = true;
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
        likeBtn.classList.remove("bi-heart");
        likeBtn.classList.add("bi-heart-fill");
    }

}
