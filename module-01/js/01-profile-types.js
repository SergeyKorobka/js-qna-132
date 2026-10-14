/**
 * Задача 1. Дані профілю
 *
 * Оголоси змінні для профілю користувача:
 * - userName — рядок "Олена";
 * - age — число 24;
 * - isOnline — логічне значення true;
 * - avatar — null;
 * - lastVisit — змінна без початкового значення.
 *
 * Обери const або let відповідно до того, чи змінюватиметься значення.
 * Зміни isOnline на false. Виведи значення кожної змінної та її тип.
 */

// Оголоси змінні, зміни isOnline та виведи значення і типи.

const userName = 'Олена';
const age = 24;
let isOnline = true;
const avatar = null;
let lastVisit;

console.log(isOnline, typeof isOnline);
isOnline = false;

console.log(userName, typeof userName);
console.log(age, typeof age);
console.log(avatar, typeof avatar);
console.log(lastVisit, typeof lastVisit);
console.log(isOnline, typeof isOnline);
