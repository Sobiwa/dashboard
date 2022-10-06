const stars = document.querySelectorAll('.star');

stars.forEach(star => {
star.addEventListener("click", (e) => {
    if (e.target.classList.contains("mdi-star-plus-outline")) {
    e.target.classList.remove("mdi-star-plus-outline");
    e.target.classList.add("mdi-star-face");
    } else {
        e.target.classList.remove("mdi-star-face");
        e.target.classList.add("mdi-star-plus-outline");
    }
})
});

// const card = document.querySelector(".card");
// const links = document.querySelector('.links');

// card.removeChild(links);
