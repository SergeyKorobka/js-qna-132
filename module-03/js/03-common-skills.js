/**
 * Задача 3. Спільні навички
 *
 * Реалізуй getCommonSkills(firstSkills, secondSkills).
 * Перебери перший масив і додай у результат лише значення, які є у другому.
 * Не змінюй початкові масиви. Функція має повернути новий масив.
 */
function getCommonSkills(firstSkills, secondSkills) {
  // Створи результат, виконай перебір і поверни його.
  const commonSkills = [];

  for (const skill of firstSkills) {
    if (secondSkills.includes(skill)) {
      commonSkills.push(skill);
    }
  }
  return commonSkills;
}
console.log(getCommonSkills(["html", "css", "js"], ["js", "git", "css"])); // ["css", "js"]
