class Form {
  constructor(formId) {
    this.formElement = document.getElementById(formId);

    if (!this.formElement) {
      console.error(`Форма с id "${formId}" не найдена!`);
      return;
    }
  }

  getValues() {
    const formData = new FormData(this.formElement);
    const values = {};

    for (let [key, value] of formData.entries()) {
      values[key] = value;
    }

    return values;
  }

  isValid() {
    return this.formElement.checkValidity();
  }

  reset() {
    this.formElement.reset();
  }

  onSubmit(callback) {
    this.formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      callback(this.getValues());
    });
  }

  getFieldValue(fieldId) {
    const field = document.getElementById(fieldId);
    return field ? field.value : null;
  }
}

export { Form };
