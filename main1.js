import "./main.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import "./homework-10.js";
import "./homework-11.js";
import "./structure.js";

class Product {
  constructor(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.createdAt = new Date();
  }

  getInfo() {
    return `${this.name} ${this.brand} - ${this.price} ₽`;
  }

  getDiscount(percent) {
    return this.price * (1 - percent / 100);
  }
}

class SkincareProduct extends Product {
  constructor(name, brand, price, skinType) {
    super(name, brand, price);
    this.skinType = skinType;
  }

  getInfo() {
    return `${super.getInfo()} | Для: ${this.skinType}`;
  }

  isSuitableFor(skinType) {
    return this.skinType === skinType || this.skinType === "всех типов кожи";
  }
}

class MakeupProduct extends Product {
  constructor(name, brand, price, shade, finish) {
    super(name, price, brand);
    this.shade = shade;
    this.finish = finish;
  }

  getInfo() {
    return `${super.getInfo()} | Оттенок: ${this.shade} | Финиш: ${this.finish}`;
  }
}

// ====== Пример использования ======
const moisturizer = new SkincareProduct(
  "Увлажняющий мусс",
  2750,
  "Invisible Symphony",
  "нормальной кожи",
);

const lipstick = new MakeupProduct(
  "Помада",
  1500,
  "Clinique",
  "Красный",
  "матовый",
);

console.log("Уход:", moisturizer.getInfo());
console.log("Макияж:", lipstick.getInfo());

export { Product, SkincareProduct, MakeupProduct };
