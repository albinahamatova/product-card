function weatherReport(city, temperature) {
  console.log(
    `Сейчас в городе ${city} температура — ${temperature} градусов по Цельсию`,
  );
}

weatherReport("Казань", "+20");
weatherReport("Мекка", "+37");
weatherReport("Медина", "+39");

const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(150000000);
checkSpeed(299792458);
checkSpeed(350000000);

const productName = "Увлажняющий мусс";
const productPrice = 2750;

function purchaseProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const difference = productPrice - budget;
    console.log(`Вам не хватает ${difference}₽, пополните баланс`);
  }
}

purchaseProduct(3000);
purchaseProduct(2000);
