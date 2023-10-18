document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector(".name");

    nameElement.addEventListener("animationiteration", function () {
        nameElement.style.animation = "none"; // Remove the animation
    });
});


