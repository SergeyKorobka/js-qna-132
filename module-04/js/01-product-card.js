/**
 * Задача 1. Картка товару
 *
 * 1. Збільш stock на 5.
 * 2. Зміни вкладену властивість dimensions.height на 30.
 * 3. Додай властивість isAvailable зі значенням true.
 * 4. Отримай значення властивості, назва якої зберігається у propertyName.
 * Вивід має містити 17, 30, true і "Desk lamp".
 */
const product = {
  name: 'Desk lamp',
  price: 1200,
  stock: 12,
  dimensions: { width: 18, height: 25 },
};

product.stock += 5;
product.dimensions.height = 30;
product.isAvailable = true;

const propertyName = 'name';

console.log(product.stock); //17
console.log(product.dimensions.height); //30
console.log(product.isAvailable); //true
console.log(product[propertyName]); // "Desk lamp"
