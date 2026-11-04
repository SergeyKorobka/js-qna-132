/** Задача 8. Середня оцінка.
 * averageScore() не має параметрів, читає числа
 * через arguments і повертає округлене середнє. Без аргументів повертає 0.
 * Перевірка:
 * (8,9,10)→9;
 * (5)→5;
 * ()→0. */
function averageScore() {
  /* Використай arguments. */
  if (arguments.length === 0) {
    return 0;
  }

  let total = 0;

  for (const arg of arguments) {
    total += arg;
  }

  return Math.round(total / arguments.length);
}

console.log(averageScore(8, 9, 10));
console.log(averageScore(5));
console.log(averageScore());
