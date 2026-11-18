const settings = {
  language: "uk",
  theme: "dark",
};

/**
 * Створіть функцію getOwnPropertyNames, яка повертає масив назв
 * лише власних властивостей переданого об'єкта.
 */
function getOwnPropertyNames(object) {
  // Ваш код тут
  return Object.keys(object);
}

// console.log(getOwnPropertyNames(settings)); // ['language', 'theme']
// console.log(getOwnPropertyNames([])); // []
