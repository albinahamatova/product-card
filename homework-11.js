import { Modal } from "./modal.js";
import { Form } from "./form.js";

const subscribeForm = new Form("subscribe-form");

if (subscribeForm.formElement) {
  subscribeForm.onSubmit((values) => {
    if (subscribeForm.isValid()) {
      console.log({ email: values["subscribe-email"] });
      subscribeForm.reset();
    } else {
      subscribeForm.formElement.reportValidity();
    }
  });
}

const registerModal = new Modal("registerModal");
const registerForm = new Form("register-form");

let user = null;

registerModal.setOpenTrigger(".button-register");

if (registerForm.formElement) {
  registerForm.onSubmit((values) => {
    if (!registerForm.isValid()) {
      reportvalidity("Пожалуйста, заполните все поля корректно!");
      return;
    }

    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;

    if (!registerForm.isValid()) {
      reportvalidity("Пожалуйста, заполните все поля корректно!");
      return;
    }

    if (password !== repeatPassword) {
      alert("Пароли не совпадают! Регистрация отклонена.");
      return;
    }

    user = {
      firstName: values.firstName,
      birthday: values.birthday,
      login: values.login,
      createdOn: new Date(),
    };

    console.log("Регистрация успешна!");
    console.log(user);

    registerForm.reset();
    registerModal.close();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && registerModal.isOpen()) {
    registerModal.close();
  }
});

export { registerModal, registerForm, user };
