/** Задача 7. Ціни зі знижкою.
 *
 * applyDiscount(prices,percent) повертає
 * округлені нові ціни.
 * prices - масив цін
 * percent - відсоток знижки
 * Початковий масив не змінюй.
 *
 * Перевірка:
 * ([100,250],20)→[80,200];
 * []→[]. */

// const applyDiscount = (prices, percent) => {
//   return prices.map(price => {
//     const discount = price * (percent / 100);
//     return Math.round(price - discount);
//   });
// };

const applyDiscount = (prices, percent) =>
  prices.map(price => Math.round(price * (1 - percent / 100)));

console.log(applyDiscount([100, 250, 300], 20));
