/**
 * Задача 4. Найвища ставка
 *
 * Реалізуй findHighestBid() без оголошених параметрів.
 * Отримай значення через arguments, вважай перший аргумент найбільшим,
 * перебери решту та поверни найбільше число.
 * Очікувані результати: 700 і 42.
 */
function findHighestBid() {
  // Використай arguments, цикл і return.
  let highestBid = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > highestBid) {
      highestBid = arguments[i];
    }
  }

  return highestBid;
}
console.log(findHighestBid(120, 700, 450, 310)); // 700
console.log(findHighestBid(42, 8, 16)); // 42
