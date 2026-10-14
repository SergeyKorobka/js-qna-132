/**
 * Задача 5. Оновлення налаштувань
 *
 * Реалізуй createSettings(defaults, ...customSettings).
 * Створи новий об’єкт на основі defaults і послідовно застосуй усі
 * користувацькі об’єкти через spread. Пізніші значення мають перезаписувати
 * попередні. Не змінюй жоден аргумент.
 */
function createSettings(defaults, ...customSettings) {
  // Створи копію та послідовно об’єднай налаштування.
}

const defaults = {
  theme: 'light',
  language: 'uk',
  notifications: true,
};

console.log(
  createSettings(defaults, { theme: 'dark' }, { notifications: false })
); // { theme: "dark", language: "uk", notifications: false }
