// Promise повідомляє про успішне завершення через resolve,
// а про помилку — через reject.

const product = {
  name: 'Бездротові навушники',
  quantity: 3,
};

const stockButtonEl = document.querySelector('.js-stock-button');
const stockResultEl = document.querySelector('.js-stock-result');

/**
 * Створіть функцію checkStock(product, requestedQuantity).
 * Вона повертає проміс і через 1 секунду перевіряє залишок товару.
 * Якщо товару достатньо, виконайте проміс із текстом
 * «Замовлення можна оформити». Інакше відхиліть проміс із помилкою
 * «Недостатньо товару».
 */

// Створіть функцію та обробник натискання.
