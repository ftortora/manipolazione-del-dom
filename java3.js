function changeTitle() {
  const title = document.querySelector(".main-title");
  title.textContent =
    title.textContent === "Knife's World"
      ? "World of Premium Knives"
      : "Knife's World";
}

document
  .getElementById("changeBackGround")
  .addEventListener("click", function () {
    document.body.classList.toggle("cambia-sfondo");
  });

document
  .getElementById("changeFooterButt")
  .addEventListener("click", function () {
    const footer = document.querySelector("footer p");
    footer.textContent = footer.textContent.includes("Francesco")
      ? "© Premium Knife Store - Via Roma 123, Milano"
      : "© Francesco . Via Toscana 39.";
  });

function addClassToLinks() {
  let aTags = document.querySelectorAll(".product-link");
  for (let i = 0; i < aTags.length; i++) {
    aTags[i].classList.add("newLink");
  }
}

const changeCssClass = document.getElementById("changeCssClassBtn");

changeCssClass.addEventListener("click", addClassToLinks);

 function getRandomColor () {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
};

const getRandomColorBtn = document.getElementById("getRandomColorBtn");

const setRandomColor = function () {
  const randomColor = getRandomColor();
  let prices = document.querySelectorAll(".product-price");
  for (let i = 0; i < prices.length; i++) {
    let singlePrice = prices[i];
    singlePrice.style.color = randomColor;
  }
};

getRandomColorBtn.addEventListener("click", setRandomColor);

function hideImage(event) {
  const imageContainer = event.currentTarget;
  imageContainer.classList.toggle("visibility");
}
let imageContainers = document.querySelectorAll("div.image-container");
imageContainers.forEach((container) => {
  container.addEventListener("click", (event) => {
    hideImage(event);
  });
});