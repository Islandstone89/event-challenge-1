
let image = document.querySelector("img");
let paragraph = document.querySelector("p");

image.addEventListener("click", () => {
    paragraph.textContent = "I have been clicked";
})