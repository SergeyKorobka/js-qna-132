/** Задача 7. Назви товарів.
 * getProductNames(products) повертає новий масив
 * значень name циклом for...of.
 *
 * Перевірка:
 * [{ name: 'Кава' }, { name: 'Чай' }] → ['Кава', 'Чай'];
 * []→[]. */

function getProductNames(products) {
  const newArr = [];

  for (const product of products) {
    newArr.push(product.name);
  }

  return newArr;
}

console.log(getProductNames([{ name: 'Кава' }, { name: 'Чай' }]));
console.log(getProductNames([]));
