/**
 * Задача 2. Стан рахунку
 *
 * Якщо balance не менше payment, запиши в message "Оплату дозволено".
 * В іншому випадку запиши "Недостатньо коштів".
 *
 * Використай конструкцію if...else.
 */
const balance = 800;
const payment = 700;
let message = '';

if (balance >= payment) {
  message = 'Оплату дозволено';
} else {
  message = 'Недостатньо коштів';
}

console.log(message);
// Додай розгалуження та виведи message.
