/**
 * Задача 10. Порядок виконання функцій
 *
 * Реалізуй makeFullName(firstName, lastName), яка повертає повне ім'я.
 * Реалізуй createWelcome(firstName, lastName), яка викликає makeFullName()
 * і повертає рядок "Вітаємо, FULL NAME!".
 *
 * Розстав повідомлення:
 * - console.log(1) — у makeFullName перед return;
 * - console.log(2) — у createWelcome перед викликом makeFullName;
 * - console.log(3) — у createWelcome після виклику makeFullName перед return.
 *
 * Визнач порядок, у якому числа будуть виведені в консоль.
 */
function makeFullName(firstName, lastName) {}

function createWelcome(firstName, lastName) {}

console.log(createWelcome('Олена', 'Коваль'));
