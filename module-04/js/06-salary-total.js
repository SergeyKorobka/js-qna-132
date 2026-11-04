/** Задача 6. Фонд зарплати.
 * calcSalaryTotal(salaries) підсумовує всі значення
 * об'єкта.
 * Перевірка:
 * {dev:30000,qa:22000}→52000;
 * {}→0. */

function calcSalaryTotal(salaries) {
  const values = Object.values(salaries);

  if (values.length === 0) {
    return 0;
  }

  let total = 0;

  for (const value of values) {
    total += value;
  }

  return total;
}

console.log(calcSalaryTotal({ dev: 30000, qa: 22000 }));
console.log(calcSalaryTotal({}));
