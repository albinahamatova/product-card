import { products, getProductDescriptions } from "./products-data.js";

const askCardCount = () => {
  let userInput;
  let isValid = false;
  let count = 0;

  while (!isValid) {
    userInput = prompt("Сколько карточек отобразить? От 1 до 5");

    if (userInput === null) {
      return 0;
    }

    const parsed = Number(userInput);

    if (Number.isInteger(parsed) && parsed >= 1 && parsed <= 5) {
      isValid = true;
      count = parsed;
    } else {
      alert("Пожалуйста, введите число от 1 до 5");
    }
  }

  return count;
};

const createCardHTML = (product) => {
  const formattedPrice = product.price.toLocaleString("ru-RU");

  const compoundItems = product.compound
    .map((item) => `<li>${item}</li>`)
    .join("");

  return `
    <li class="card">
      <img
        class="card__image"
        src="${product.image}"
        alt="${product.alt}"
      />
      <p class="card__skin-type">${product.skinType}</p>
      <h2 class="card__product-name">${product.name}</h2>
      <p class="card__description">
        ${product.description}
      </p>
      <span class="card__compound-list">Состав:</span>
      <ul class="card__compound-text">
        ${compoundItems}
      </ul>
      <div class="card__price-line">
        <span class="card__price">Цена:</span>
        <span class="card__price-value">${formattedPrice} ₽</span>
      </div>
    </li>
  `;
};

const renderCards = (productsToRender) => {
  const row1 = document.querySelector(".products-row-1");
  const row2 = document.querySelector(".products-row-2");

  if (!row1 || !row2) {
    console.error("Контейнеры для карточек не найдены");
    return;
  }

  row1.innerHTML = "";
  row2.innerHTML = "";

  const firstRowCount = Math.min(productsToRender.length, 3);
  const firstRowProducts = productsToRender.slice(0, firstRowCount);
  const secondRowProducts = productsToRender.slice(firstRowCount);

  firstRowProducts.forEach((product) => {
    row1.innerHTML += createCardHTML(product);
  });

  secondRowProducts.forEach((product) => {
    row2.innerHTML += createCardHTML(product);
  });
};

const getProductDescriptionMap = (productsArray) => {
  return productsArray.reduce((acc, product) => {
    acc[product.name] = product.description;
    return acc;
  }, {});
};

const init = () => {
  const count = askCardCount();
  if (count === 0) {
    console.log("Показ карточек отменён");
    return;
  }

  const productsToShow = products.slice(0, count);

  renderCards(productsToShow);

  const descriptionMap = getProductDescriptionMap(products);
  console.log("Задание 4: Массив объектов (название -> описание):");
  console.log(descriptionMap);

  console.log("=== Описание продуктов ===");
  Object.entries(descriptionMap).forEach(([name, description]) => {
    console.log(`${name}: ${description}`);
  });
};

document.addEventListener("DOMContentLoaded", init);

export { askCardCount, createCardHTML, renderCards, getProductDescriptionMap };
