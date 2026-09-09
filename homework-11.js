// ====== 1. ЛОГИКА ДЛЯ ФОРМЫ ПОДПИСКИ В ФУТЕРЕ ======
const subscribeForm = document.getElementById("subscribe-form");
const subscribeEmail = document.getElementById("subscribe-email");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Отменяем отправку формы

    // Проверяем валидность email
    if (subscribeEmail.checkValidity()) {
      // Если валидный - выводим в консоль
      console.log({ email: subscribeEmail.value });
      subscribeForm.reset(); // Очищаем форму
    } else {
      // Если невалидный - показываем ошибку
      subscribeEmail.reportValidity();
    }
  });
}

// ====== 2. ЛОГИКА МОДАЛЬНОГО ОКНА ======
const registerBtn = document.querySelector(".button-register");
const modal = document.getElementById("registerModal");
const overlay = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("modalClose");

// Функция открытия модалки
function openModal() {
  modal.classList.add("modal-showed");
  overlay.classList.add("modal-overlay-showed");
  // Запрещаем прокрутку страницы
  document.body.style.overflow = "hidden";
}

// Функция закрытия модалки
function closeModal() {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("modal-overlay-showed");
  document.body.style.overflow = "auto";
  // Очищаем форму
  const registerForm = document.getElementById("register-form");
  if (registerForm) registerForm.reset();
}

// Открытие по кнопке
if (registerBtn) {
  registerBtn.addEventListener("click", openModal);
}

// Закрытие по крестику
if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

// Закрытие по клику на overlay
if (overlay) {
  overlay.addEventListener("click", closeModal);
}

// ====== 3. ЛОГИКА ФОРМЫ РЕГИСТРАЦИИ ======
const registerForm = document.getElementById("register-form");
let user = null; // Внешняя переменная

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Получаем значения всех полей
    const firstName = document.getElementById("firstName").value.trim();
    const surName = document.getElementById("surName").value.trim();
    const birthday = document.getElementById("birthday").value;
    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;

    // Проверяем валидность формы
    if (!registerForm.checkValidity()) {
      alert("Пожалуйста, заполните все поля корректно!");
      return;
    }

    // Проверяем совпадение паролей
    if (password !== repeatPassword) {
      alert("Пароли не совпадают! Регистрация отклонена.");
      return;
    }

    // Если всё ок - создаем объект user
    user = {
      firstName: firstName,
      surName: surName,
      birthday: birthday,
      login: login,
      password: password,
      createdOn: new Date(), // Добавляем время создания
    };

    // Выводим в консоль
    console.log("Регистрация успешна!");
    console.log(user);

    // Закрываем модалку
    closeModal();
  });
}
