/**
 * Задача 4. Загальна вартість
 *
 * Реалізуй calcCartTotal(cart) через reduce(). Для кожної позиції додай
 * price * quantity до акумулятора. Початкове значення акумулятора — 0.
 */
const cart = [
  { name: 'Keyboard', price: 1800, quantity: 2 },
  { name: 'Mouse', price: 900, quantity: 1 },
  { name: 'Cable', price: 250, quantity: 3 },
];

const calcCartTotal = cart => {};

console.log(calcCartTotal(cart)); // 5250
