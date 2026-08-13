const productCards = document.querySelectorAll(".card");
const changeColorAllCardButton = document.querySelector(
  "#change-color-all-card-button",
);
const lilacColorHash = "#b28ec7";
const peachColorHash = "#e5ac93";

changeColorAllCardButton.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = lilacColorHash));
});

const productCardFirst = document.querySelector(".card");
const changeColorFirstCardButton = document.querySelector(
  "#change-color-first-card-button",
);

changeColorFirstCardButton.addEventListener("click", () => {
  productCardFirst.style.backgroundColor = peachColorHash;
});

const openGoogleButton = document.querySelector("#open-google");

openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const googleURL = "https://google.com";
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open(googleURL);
  } else {
    return;
  }
}

const outputLogButton = document.querySelector("#output-console-log");

outputLogButton.addEventListener("click", () => outputConsoleLog("ДЗ №4"));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

const mainTitle = document.querySelector(".title");

if (mainTitle) {
  mainTitle.addEventListener("mouseenter", function () {
    console.log(this.textContent);
  });
  console.log("Заголовок найден, слушатель добавлен");
} else {
  console.log("Заголовок не найден!");
}

const colorToggleButton = document.createElement("button");
colorToggleButton.textContent = "Сменить цвет кнопки";
colorToggleButton.id = "color-toggle-button";

const style = document.createElement("style");
style.textContent = `
  #color-toggle-button {
    display: block;
    margin: 20px auto;
    padding: 12px 30px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: "Montserrat", sans-serif;
  }
  
  .brightpeach-color {
    background-color: #f5a08c;
    color: #333;
  }
  
  .brightlilac-color {
    background-color: #c47ac9;
    color: #fff;
  }
`;

document.head.appendChild(style);

const imageBackground = document.querySelector(".image-background");
imageBackground.insertBefore(
  colorToggleButton,
  imageBackground.querySelector(".products"),
);

colorToggleButton.classList.add("brightpeach-color");

colorToggleButton.addEventListener("click", function () {
  this.classList.toggle("brightpeach-color");
  this.classList.toggle("brightlilac-color");
});
