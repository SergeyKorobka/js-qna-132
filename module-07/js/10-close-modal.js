/** Задача 10. Керування модальним вікном.
 *
 * Додайте відкриття модального вікна кнопкою `.js-open-modal` і закриття
 * кнопкою `.js-close-modal`.
 * Для показу додавайте клас `is-open`, а для приховування — видаляйте його.
 * Відкрите модальне вікно також має закриватися клавішею Escape
 * або кліком по бекдропу.
 *
 */

const modalEl = document.querySelector(".js-modal");
const openModalButtonEl = document.querySelector(".js-open-modal");
const closeModalButtonEl = document.querySelector(".js-close-modal");

// Додайте click-обробники кнопкам відкриття та закриття.
