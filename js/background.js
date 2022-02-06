const images = ["img_02_l.png", "img_03_l.png", "img_04_l.png", "img_05_l.png"];

function randomNumber(min, max) {
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
}

const chosenImage = images[randomNumber(0, images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
