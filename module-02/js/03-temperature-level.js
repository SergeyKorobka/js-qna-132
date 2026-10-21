/**
 * Задача 3. Рівень температури
 *
 * Реалізуй getTemperatureLevel(temperature):
 * - менше 0 — повертає "Мороз";
 * - від 0 до 15 включно — "Прохолодно";
 * - від 16 до 25 включно — "Тепло";
 * - більше 25 — "Спекотно".
 *
 * Використай блоки if, else if та else.
 */
function getTemperatureLevel(temperature) {
  // Додай розгалуження й поверни рядок.

  if (temperature < 0) {
    return 'Мороз';
  } else if (temperature <= 15) {
    return 'Прохолодно';
  } else if (temperature <= 25) {
    return 'Тепло';
  } else {
    return 'Спекотно';
  }
}

console.log(getTemperatureLevel(-4));
console.log(getTemperatureLevel(12));
console.log(getTemperatureLevel(21));
console.log(getTemperatureLevel(31));
