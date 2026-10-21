/**
 * Задача 5. Спосіб доставки
 *
 * Реалізуй getDeliveryMessage(option) через switch:
 * - "pickup" — "Самовивіз сьогодні";
 * - "courier" — "Кур'єр доставить завтра";
 * - "post" — "Відправимо поштою";
 * - будь-яке інше значення — "Уточніть спосіб доставки".
 */
function getDeliveryMessage(option) {
  // Додай switch і поверни повідомлення.

  switch (option) {
    case 'pickup':
      return 'Самовивіз сьогодні';

    case 'courier':
      return "Кур'єр доставить завтра";

    case 'post':
      return 'Відправимо поштою';

    default:
      return 'Уточніть спосіб доставки';
  }
}

console.log(getDeliveryMessage('post'));
console.log(getDeliveryMessage('drone'));
