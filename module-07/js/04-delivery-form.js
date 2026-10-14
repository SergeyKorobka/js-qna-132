const formEl = document.querySelector('.js-delivery-form');
const summaryEl = document.querySelector('.js-summary');

/**
 * На submit скасуй перезавантаження, створи об'єкт із `name` і `city`, а в
 * `.js-summary` покажи "Одержувач: Ім'я, місто: Місто".
 * Перевірка: "Оля" + "Київ" → відповідний текст; інше місто працює; сторінка не перезавантажується.
 */
