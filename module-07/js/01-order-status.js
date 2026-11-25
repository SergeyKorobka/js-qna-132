/**
 * Знайди `.js-status`, зміни текст на "Замовлення доставлено" та додай клас
 * `is-complete`.
 * Перевірка: початковий текст змінюється; клас додається; інші елементи не змінюються.
 */

// Напиши код нижче.
const statusEl = document.querySelector(".js-status");

statusEl.textContent = "Замовлення доставлено";
statusEl.classList.add("is-complete");
