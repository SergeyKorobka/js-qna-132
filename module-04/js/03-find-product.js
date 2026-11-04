/**
 * Задача 3. Пошук товару
 *
 * Реалізуй findProduct(products, productName).
 * Порівнюй назви без урахування регістру. Поверни знайдений об’єкт,
 * а якщо збігів немає — null. Не змінюй масив та його об’єкти.
 */

function findProduct(products, productName) {
  const normalizedName = productName.toLowerCase();

  for (const product of products) {
    if (product.name.toLowerCase() === normalizedName) {
      return product;
    }
  }

  return null;
}

const products = [
  { name: 'Keyboard', price: 1800 },
  { name: 'Monitor', price: 9200 },
  { name: 'Mouse', price: 900 },
];

console.log(findProduct(products, 'mONitor')); // { name: "Monitor", price: 9200 }
