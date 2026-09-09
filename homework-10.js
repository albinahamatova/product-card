import { products } from "./products-data.js";

const askCardCount = () => {
  while (true) {
    const userInput = prompt("Сколько карточек отобразить? От 1 до 5");

    if (userInput === null) {
      return 0;
    }

    const parsed = Number(userInput);

    if (Number.isInteger(parsed) && parsed >= 1 && parsed <= 5) {
      return parsed;
    }

    alert("Пожалуйста, введите число от 1 до 5");
  }
};

// Функция для создания карточки из шаблона
const createCardFromTemplate = (product) => {
  // Находим шаблон
  const template = document.getElementById("product-card-template");
  // Клонируем его содержимое
  const templateClone = document.importNode(template.content, true);

  // Находим элементы внутри клона
  const image = templateClone.querySelector(".card__image");
  const skinType = templateClone.querySelector(".card__skin-type");
  const productName = templateClone.querySelector(".card__product-name");
  const description = templateClone.querySelector(".card__description");
  const compoundList = templateClone.querySelector(".card__compound-list");
  const priceValue = templateClone.querySelector(".card__price-value");

  // Заполняем данными
  image.src = product.image;
  image.alt = product.alt || product.name;
  skinType.textContent = product.skinType;
  productName.textContent = product.name;
  description.textContent = product.description;

  // Заполняем состав
  compoundList.innerHTML = "";
  product.compound.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    compoundList.appendChild(li);
  });

  // Форматируем цену
  const formattedPrice = product.price.toLocaleString("ru-RU");
  priceValue.textContent = `${formattedPrice} ₽`;

  return templateClone; // Возвращаем весь фрагмент
};

const renderCards = (productsToRender) => {
  const container = document.getElementById("products-container");

  if (!container) {
    console.error("Контейнер для карточек не найден");
    return;
  }

  // Очищаем контейнер
  container.innerHTML = "";

  // Добавляем карточки
  productsToRender.forEach((product) => {
    const cardFragment = createCardFromTemplate(product);
    container.appendChild(cardFragment);
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

init();

export {
  askCardCount,
  createCardFromTemplate,
  renderCards,
  getProductDescriptionMap,
};
