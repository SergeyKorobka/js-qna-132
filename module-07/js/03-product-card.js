const product = { name: "Навушники", price: 2400, available: true };

/**
 * Створи `article` із класом `product-card` та додай в середину нього:
 * заголовок (h2) з назвою
 * абзац (p) із текстом "2400 грн".
 * абзац (p) і додай в нього текст "В наявності" якщо available: true, в іншому випадку "Товар відсутній"
 * Додай `article` у `.js-products`.
 *
 * Перевірка: картка має 3 дочірні елементи; ціна має "грн", наявність відповідає available;
 */

const productsEl = document.querySelector(".js-products");

const article = document.createElement("article");
article.classList.add("product-card");

const title = document.createElement("h2");
title.textContent = product.name;

const price = document.createElement("p");
price.textContent = `${product.price} грн`;

const info = document.createElement("p");
info.textContent = product.available ? "В наявності" : "Товар відсутній";

article.append(title, price, info);

productsEl.append(article);
