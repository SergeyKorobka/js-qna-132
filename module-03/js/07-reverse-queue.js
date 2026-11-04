/** Задача 7. Зворотна черга.
 * reverseQueue(queue) повертає новий масив у
 * зворотному порядку, використовуючи цикл і push.
 * Початковий не змінюй.
 * Перевірка:
 * ['А','Б','В']→['В','Б','А'];
 * []→[]. */
function reverseQueue(queue) {
  /* Створи й поверни новий масив. */
  const reverse = [];

  for (let i = queue.length - 1; i >= 0; i -= 1) {
    reverse.push(queue[i]);
  }

  return reverse;
}

console.log(reverseQueue(["А", "Б", "В"]));
console.log(reverseQueue([]));
