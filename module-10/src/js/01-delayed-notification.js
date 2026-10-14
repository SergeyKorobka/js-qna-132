// setTimeout запускає функцію один раз після заданої затримки.

const notificationButtonEl = document.querySelector('.js-notification-button');
const notificationEl = document.querySelector('.js-notification');

/**
 * Після натискання кнопки одразу покажіть текст «Зберігаємо дані…».
 * Через 2 секунди замініть його на «Дані успішно збережено».
 * Поки очікуємо завершення таймера, кнопка має бути неактивною.
 */

// Додайте обробник натискання та заплануйте зміну повідомлення.
