/**
 * Задача 4. Короткий код запрошення
 *
 * Із рядка invitation створи code, який складається з першого символу,
 * останнього символу та довжини рядка.
 *
 * Сформуй шаблонний рядок "Код запрошення: CODE".
 * Початковий рядок invitation не змінюй.
 */
const invitation = 'JavaScript';

// Отримай потрібні символи, створи code і повідомлення.
const firstLetter = invitation[0]; // J
const lengthWord = invitation.length; // 10
const lastIndex = lengthWord - 1; // 9
const lastLetter = invitation[lastIndex]; // t

const code = `${firstLetter}${lastLetter}${lengthWord}`;

// const code = `${invitation[0]}${invitation[invitation.length - 1]}${invitation.length}`;

console.log(code);
