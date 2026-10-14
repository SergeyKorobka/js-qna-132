/** Задача 8. Список товарів.
 * Створи li для кожного item через createElement,
 * текст "Назва — N грн", збери елементи через map і додай одним append.
 *
 * Перевірка: у контейнері два елементи в початковому порядку. */
// Створи й додай колекцію.

const items = [
  { name: 'Кава', price: 240 },
  { name: 'Чай', price: 160 },
];
const productsEl = document.querySelector('.js-products');
