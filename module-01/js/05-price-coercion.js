/**
 * Задача 5. Рядок і число
 *
 * Значення price та quantity надійшли як рядки.
 *
 * Створи:
 * - concatenatedValue — результат додавання початкових значень;
 * - numericTotal — добуток значень після явного перетворення на числа;
 * - label — рядок "QUANTITY товари по PRICE грн".
 *
 * Виведи кожен результат і його тип.
 */
const price = '125.5';
const quantity = '3';
const concatenatedValue = price + quantity;
const numericTotal = Number(price) * Number(quantity);
const label = `${quantity} товари по ${price} грн`;

// Створи три результати та виведи їх значення і типи.
console.log(concatenatedValue);
console.log(numericTotal);
console.log(label);

// console.log(3 + 3 + 3 + '3');
