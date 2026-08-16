// 3. Объект с личными данными

const person = {
  firstName: "Альбина",
  lastName: "Хаматова",
  email: "albina_hamatova@mail.ru",
  job: "Frontend-разработчик",
  position: "Senior",
  age: 36,
  country: "Россия",
  city: "Казань",
  relationshipStatus: "замужем",
  hobby: "творчество",
};

console.log("Задание 3 - Личные данные:", person);

// 4. Объект с данными об автомобиле + владелец (добавляем отдельной строкой)

const car = {
  brand: "Renault",
  model: "Kaptur",
  year: 2019,
  color: "Черный",
  transmission: "Автомат",
};

car.owner = person;

console.log("Задание 4 - Автомобиль с владельцем:", car);

// 5. Функция: добавить свойство "максимальная скорость", если отсутствует

function addMaxSpeed(carObject) {
  if (!carObject.hasOwnProperty("maxSpeed")) {
    carObject.maxSpeed = 220;
  }
}

console.log("Задание 5 - До добавления maxSpeed:", car);
addMaxSpeed(car);
console.log("Задание 5 - После добавления maxSpeed:", car);

// 6. Функция: вывести значение свойства объекта

function getPropertyValue(obj, propertyName) {
  console.log(
    `Задание 6 - Значение свойства "${propertyName}":`,
    obj[propertyName],
  );
}

getPropertyValue(car, "brand");
getPropertyValue(car, "year");
getPropertyValue(person, "city");

// 7. Массив с названиями продуктов

const products = ["Молоко", "Хлеб", "Яйца", "Масло", "Сыр"];

console.log("Задание 7 - Продукты:", products);

// 8. Массив книг (объекты) + добавление книги в конец

const books = [
  {
    title: "Гарри Поттер и Философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "Красный",
    genre: "Фэнтези",
  },
  {
    title: "Властелин колец: Братство Кольца",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    coverColor: "Зелёный",
    genre: "Фэнтези",
  },
  {
    title: "Игра престолов",
    author: "Джордж Мартин",
    year: 1996,
    coverColor: "Чёрный",
    genre: "Эпическое фэнтези",
  },
];

books.push({
  title: "Хоббит",
  author: "Дж. Р. Р. Толкин",
  year: 1937,
  coverColor: "Синий",
  genre: "Фэнтези",
});

console.log("Задание 8 - Список книг:", books);

// 9. Два массива книг (один — вселенная) и объединение через оператор

const harryPotterBooks = [
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "Золотой",
    genre: "Фэнтези",
    universe: "Гарри Поттер",
  },
  {
    title: "Гарри Поттер и Узник Азкабана",
    author: "Дж. К. Роулинг",
    year: 1999,
    coverColor: "Серебряный",
    genre: "Фэнтези",
    universe: "Гарри Поттер",
  },
];

// Объединяем два массива (все книги + книги вселенной)
const allBooks = [...books, ...harryPotterBooks];

console.log("Задание 9 - Объединённый массив книг:", allBooks);

// 10. Функция с map: добавляем свойство isRare (если год > 2000 — true)

function markRareBooks(booksArray) {
  return booksArray.map((book) => {
    const updatedBook = { ...book };
    updatedBook.isRare = book.year > 2000;
    return updatedBook;
  });
}

// Применяем функцию к объединённому массиву
const rareMarkedBooks = markRareBooks(allBooks);

console.log("Задание 10 - Книги с отметкой isRare:", rareMarkedBooks);
