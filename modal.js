class Modal {
  constructor(modalId) {
    this.modalElement = document.getElementById(modalId);
    this.overlayElement = document.querySelector(".modal-overlay");
    this.closeButton = this.modalElement?.querySelector(".modal-close");

    if (!this.modalElement) {
      console.error(`Модальное окно с id "${modalId}" не найдено!`);
      return;
    }

    this.#setupCloseListener();
  }

  open() {
    this.modalElement.classList.add("modal-showed");
    if (this.overlayElement) {
      this.overlayElement.classList.add("modal-overlay-showed");
    }
    document.body.style.overflow = "hidden";
  }

  close() {
    this.modalElement.classList.remove("modal-showed");
    if (this.overlayElement) {
      this.overlayElement.classList.remove("modal-overlay-showed");
    }
    document.body.style.overflow = "";
  }

  isOpen() {
    return this.modalElement.classList.contains("modal-showed");
  }

  #setupCloseListener() {
    if (this.closeButton) {
      this.closeButton.addEventListener("click", () => {
        this.close();
      });
    }

    if (this.overlayElement) {
      this.overlayElement.addEventListener("click", () => {
        if (this.isOpen()) {
          this.close();
        }
      });
    }
  }

  setOpenTrigger(buttonSelector) {
    const button = document.querySelector(buttonSelector);
    if (button) {
      button.addEventListener("click", () => {
        this.open();
      });
    } else {
      console.warn(`Кнопка "${buttonSelector}" не найдена`);
    }
  }
}

export { Modal };
