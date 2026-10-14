/** 🟢 Виводь `data-action` натиснутої кнопки. Клік поза кнопкою ігноруй.
 * Перевірка: save → "save"; delete → "delete"; контейнер → без виводу. */
const actionsEl = document.querySelector('.js-actions');

// Додай один обробник на контейнер.
