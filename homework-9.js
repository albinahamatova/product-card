// Уровень 1

// Массив чисел 1–10, отфильтровать от 5 и больше
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fromFive = numbers.filter((num) => num >= 5);
console.log("Числа от 5:", fromFive);

// Массив строк (названия фильмов) и проверка наличия
const movies = ["Inception", "Interstellar", "The Matrix", "Avatar", "Titanic"];
const hasMovie = movies.includes("The Matrix");
console.log('Есть ли "The Matrix"?', hasMovie);

// Функция переворота массива и применение к двум массивам
function reverseArray(arr) {
  return arr.slice().reverse(); // возвращаем новый перевёрнутый массив
}

const reversedNumbers = reverseArray(numbers);
const reversedMovies = reverseArray(movies);
console.log("Перевёрнутые числа:", reversedNumbers);
console.log("Перевёрнутые фильмы:", reversedMovies);

// Уровень 2

// Импорт массива комментариев из comments.js
import { comments } from "./comments.js";

// Комментарии, почта которых содержит ".com"
const comEmails = comments.filter((comment) => comment.email.includes(".com"));
console.log("7. Почты с .com:", comEmails);

// 8. Меняем postId: id <= 5 → postId: 2, id > 5 → postId: 1
const updatedPosts = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));
console.log("8. Обновлённые postId:", updatedPosts);

// 9. Объекты только из id и name
const idAndName = comments.map(({ id, name }) => ({ id, name }));
console.log("9. Только id и name:", idAndName);

// 10. Добавляем свойство isInvalid (body > 180 → true)
const withInvalidFlag = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));
console.log("10. С флагом isInvalid:", withInvalidFlag);

// Уровень 3

// 11. reduce и map для массива почт
const emailsFromReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log("11. Почты (reduce):", emailsFromReduce);

const emailsFromMap = comments.map((comment) => comment.email);
console.log("11. Почты (map):", emailsFromMap);

// 12. toString() и join() — приводим массив почт к строке
const emailStringToString = emailsFromMap.toString();
const emailStringJoin = emailsFromMap.join(", ");
console.log("12. toString():", emailStringToString);
console.log("12. join():", emailStringJoin);
