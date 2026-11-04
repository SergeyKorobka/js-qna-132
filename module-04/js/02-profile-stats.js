/**
 * Задача 2. Статистика профілю
 *
 * Отримай масив ключів і масив значень profile.
 * Поверни об’єкт із трьома властивостями:
 * count — кількість властивостей;
 * fields — ключі через ", ";
 * data — значення через " | ".
 */
function getProfileStats(profile) {
  const keys = Object.keys(profile);
  const values = Object.values(profile);
  // const entries = Object.entries(profile);

  return {
    count: keys.length,
    fields: keys.join(', '),
    data: values.join(' | '),
  };
}

console.log(getProfileStats({ name: 'Олена', age: 24, city: 'Львів' }));
