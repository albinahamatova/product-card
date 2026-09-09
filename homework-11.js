const subscribeForm = document.getElementById("subscribe-form");
const subscribeEmail = document.getElementById("subscribe-email");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Отменяем отправку формы

    // Проверяем валидность email
    if (subscribeForm.checkValidity()) {
      // Если валидный - выводим в консоль
      console.log({ email: subscribeEmail.value });
      subscribeForm.reset(); // Очищаем форму
    } else {
      // Если невалидный - показываем ошибку
      subscribeForm.reportValidity();
    }
  });
}

const registerBtn = document.querySelector(".button-register");
const modal = document.getElementById("registerModal");
const overlay = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("modalClose");

function openModal() {
  modal.classList.add("modal-showed");
  overlay.classList.add("modal-overlay-showed");
  // Запрещаем прокрутку страницы
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("modal-overlay-showed");
  document.body.style.overflow = "";
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

const registerForm = document.getElementById("register-form");
let user = null; // Внешняя переменная

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const surName = document.getElementById("surName").value.trim();
    const birthday = document.getElementById("birthday").value;
    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;

    if (!registerForm.checkValidity()) {
      alert("Пожалуйста, заполните все поля корректно!");
      return;
    }

    if (password !== repeatPassword) {
      alert("Пароли не совпадают! Регистрация отклонена.");
      return;
    }

    user = {
      firstName: firstName,
      surName: surName,
      birthday: birthday,
      login: login,
      createdOn: new Date(),
    };

    console.log("Регистрация успешна!");
    console.log(user);

    registerForm.reset();
    closeModal();
  });
}
