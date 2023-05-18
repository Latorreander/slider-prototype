import { advanceImage, backImage } from "./functions.js";

const forwardButton = document.getElementById("forward-btn");
const backButton = document.getElementById("back-btn");

forwardButton.addEventListener("click", () => {
    advanceImage();
});

backButton.addEventListener("click", () => {
    backImage();
});

export { forwardButton, backButton };
