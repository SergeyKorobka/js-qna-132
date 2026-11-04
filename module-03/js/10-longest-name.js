/** Задача 10. Найдовше ім'я.
 * findLongestName(names) повертає найдовший рядок.
 * За однакової довжини залиш перший. Для [] поверни ''.
 *
 * Перевірка:
 * ['Оля','Олександр','Максим']→'Олександр';
 * []→''. */

function findLongestName(names) {
  /* Перебери масив. */
  if (names.length === 0) {
    return "";
  }

  let longestName = names[0];

  for (const name of names) {
    if (name.length > longestName.length) {
      longestName = name;
    }
  }

  return longestName;
}

console.log(findLongestName(["Оля", "Олександр", "Максим"]));
console.log(findLongestName([]));
