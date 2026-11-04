/**
 * Задача 5. Оновлення налаштувань
 *
 * Реалізуй createSettings(defaults, customSettings).
 * Створи новий об’єкт на основі defaults і застосуй до нього
 * користувацькі налаштування. Пізніші значення мають перезаписувати
 * попередні. Не змінюй жоден аргумент.
 */
function createSettings(defaults, customSettings) {
  const newSettings = Object.assign({}, defaults, customSettings);

  // const newSetting2 = { ...defaults, ...customSettings };

  return newSettings;
}

const defaults = {
  theme: 'light',
  language: 'uk',
  notifications: true,
};

console.log(createSettings(defaults, { theme: 'dark', notifications: false })); // { theme: "dark", language: "uk", notifications: false }

console.log(defaults);
