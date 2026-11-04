/** Задача 6. Сума кошика.
 * calcTotal(prices) циклом for...of додає всі числа.
 *
 * Перевірка:
 * [120,80,300]→500;
 * []→0;
 * [99]→99.
 *
 * Масив не змінюй. */

function calcTotal(prices) {
  /* Накопич і поверни total. */
  let total = 0;

  for (const price of prices) {
    total += price; // total = total + price
  }

  return total;
}

console.log(calcTotal([120, 80, 300]));
console.log(calcTotal([]));
console.log(calcTotal([99]));
