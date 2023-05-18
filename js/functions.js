import { forwardButton, backButton } from "./events.js";
const images = document.querySelectorAll(".image");

let counterImage = 0;

let currentImage = (images.classList = "active");

const advanceImage = () => {
    if (currentImage) {
        images[counterImage].classList.remove("active");
        counterImage++;
        images[counterImage].classList.add("active");
        backButton.classList.remove("disable");
        backButton.classList.add("enable");
    }

    if (counterImage === images.length - 1) {
        forwardButton.classList.add("disable");
    }
};

const backImage = () => {
    if (currentImage) {
        images[counterImage].classList.remove("active");
        counterImage--;
        images[counterImage].classList.add("active");
        forwardButton.classList.add("enable");
        forwardButton.classList.remove("disable");
    }

    if (counterImage === 0) {
        backButton.classList.add("disable");
        forwardButton.classList.add("enable");
    }
};

export { advanceImage, backImage };
