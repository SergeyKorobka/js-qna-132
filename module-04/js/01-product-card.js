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
const propertyName = 'name';
// Зміни й доповни product, потім отримай dynamicValue.
