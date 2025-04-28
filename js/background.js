const verticalImages = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
const horizontalImages = ["0-1.jpeg", "1-1.jpeg", "2-1.jpeg", "3-1.jpeg"];

const chosenImageV =
  verticalImages[Math.floor(Math.random() * verticalImages.length)];

const chosenImageH =
  horizontalImages[Math.floor(Math.random() * horizontalImages.length)];

const bgImage = document.createElement("img");

function updateBackgroundImage() {
  if (window.innerWidth >= 400) {
    bgImage.src = `img/${chosenImageH}`;
    document.body.appendChild(bgImage);
  } else {
    bgImage.src = `img/${chosenImageV}`;
    document.body.appendChild(bgImage);
  }
}

updateBackgroundImage();
window.addEventListener("resize", updateBackgroundImage);
