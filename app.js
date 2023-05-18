
const images = document.querySelectorAll(".image");
const forwardButton = document.getElementById("forward-btn");
const backButton = document.getElementById("back-btn");

let counter = 0;
currentImage = images.length.classList = "active";

forwardButton.addEventListener("click", () => {
    if (currentImage) {
        images[counter].classList.remove("active");
        counter++;
        images[counter].classList.add("active");
        backButton.classList.remove("disable");
        backButton.classList.add("enable");
    }

    if (counter === images.length - 1) {
        forwardButton.classList.add("disable");
    }
});

backButton.addEventListener("click", () => {
    if (currentImage) {
        images[counter].classList.remove("active");
        counter--;
        images[counter].classList.add("active");
        forwardButton.classList.add("enable");
        forwardButton.classList.remove("disable");
    }

    if (counter === 0) {
        backButton.classList.add("disable");
        forwardButton.classList.add("enable");
    }
});