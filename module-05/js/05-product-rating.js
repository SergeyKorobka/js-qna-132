/**
 * Задача 5. Рейтинг товарів
 *
 * Реалізуй getAvailableProductLabels(products).
 * Одним ланцюжком:
 * 1. Залиш товари з stock > 0.
 * 2. Відсортуй новий масив за rating від більшого до меншого.
 * 3. Перетвори на рядки формату "name — rating".
 * Початковий масив не змінюй.
 */
const products = [
  { name: 'Mouse', rating: 4.5, stock: 3 },
  { name: 'Monitor', rating: 4.9, stock: 0 },
  { name: 'Keyboard', rating: 4.8, stock: 7 },
  { name: 'Cable', rating: 4.1, stock: 12 },
];
const getAvailableProductLabels = products => {
  return products
    .filter(product => product.stock > 0)
    .toSorted((a, b) => b.rating - a.rating)
    .map(product => `${product.name} - ${product.rating}`);
};

console.log(getAvailableProductLabels(products));
