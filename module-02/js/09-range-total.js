/**
 * Задача 9. Сума чисел, кратних трьом
 *
 * Циклом for перебери всі числа від min до max включно.
 * Додавай до total лише числа, які діляться на 3 без залишку.
 * Після циклу виведи total.
 */
const min = 5;
const max = 20;
let total = 0;
// Додай цикл, перевірку кратності й накопичення суми.

for (let number = min; number <= max; number += 1) {
  if (number % 3 === 0) {
    total += number;
  }
}

console.log(total);
