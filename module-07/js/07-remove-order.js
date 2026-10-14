// Список у розмітці має відповідати даним у колекції orders.
// Після зміни колекції функція renderOrders повторно створює список.

let orders = [
  { id: 1, product: 'Навушники' },
  { id: 2, product: 'Клавіатура' },
  { id: 3, product: 'Миша' },
];

const ordersEl = document.querySelector('.js-orders');

/**
 * Створіть розмітку одного замовлення з назвою товару та кнопкою
 * «Видалити». Збережіть id замовлення в data-атрибуті кнопки.
 */
function createOrderMarkup(order) {
  // Ваш код тут
}

/**
 * Реалізуйте renderOrders. Функція отримує колекцію замовлень,
 * відтворює її у списку .js-orders і додає обробники до кнопок.
 */
function renderOrders(items) {
  // Ваш код тут
}

/**
 * Реалізуйте removeOrder. Функція отримує колекцію та id замовлення,
 * не змінює початковий масив і повертає нову колекцію без цього замовлення.
 */
function removeOrder(items, orderId) {
  // Ваш код тут
}

/**
 * Реалізуйте handleRemoveOrder. Отримайте id з кнопки, оновіть orders
 * результатом removeOrder та повторно відобразіть список.
 */
function handleRemoveOrder(event) {
  // Ваш код тут
}

renderOrders(orders);
