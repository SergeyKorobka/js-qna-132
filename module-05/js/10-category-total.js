/** Задача 10. Сума категорії.
 *
 * calcCategoryTotal(products,category) підсумовує price потрібної категорії.
 *
 * Перевірка:
 * food 100+50→150;
 * books без товарів→0. */

const calcCategoryTotal = (products, category) => {
  return products.reduce((acc, product) => {
    if (product.category === category) {
      return acc + product.price;
    }
    return acc;
  }, 0);
  /* Поверни суму */
};

const products = [
  { category: 'food', price: 100 },
  { category: 'food', price: 50 },
  { category: 'car', price: 200 },
  { category: 'car', price: 300 },
];

console.log(calcCategoryTotal(products, 'food'));
