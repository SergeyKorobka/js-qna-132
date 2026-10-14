/** Задача 9. Живий перегляд.
 *
 * На input копіюй значення поля в `.js-preview`.
 * Якщо поле порожнє, показуй "Тут з'явиться текст".
 *
 * Перевірка:
 * "Привіт"→"Привіт";
 * очищення→текст-підказка. */

const previewInputEl = document.querySelector('.js-preview-input');
const previewEl = document.querySelector('.js-preview');
// Додай input-обробник.
