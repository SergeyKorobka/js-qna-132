/**
 * Задача 3. Пакування товару
 *
 * На складі є 137 товарів. В одну коробку вміщується 12 товарів.
 *
 * Обчисли:
 * - fullBoxes — кількість повністю заповнених коробок;
 * - remainingItems — кількість товарів, які залишилися;
 * - itemsAfterDelivery — кількість товарів після надходження ще 7 одиниць.
 *
 * Використай Math.floor(), оператор залишку від ділення та комбінований оператор.
 */
const totalItems = 137;
const boxCapacity = 12;
const fullBoxes = Math.floor(137 / 12);
const remainingItems = 137 % 12;
// const itemsAfterDelivery = totalItems + 7;
let itemsAfterDelivery = totalItems;
itemsAfterDelivery += 7;

// Виконай обчислення та виведи результати.

console.log(fullBoxes);
console.log(remainingItems);
console.log(itemsAfterDelivery);
